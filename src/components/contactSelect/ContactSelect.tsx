import React, { useState, useEffect, useCallback, memo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Recipient } from "../../types/recipient";
import * as Contacts from "expo-contacts";
import styles from "./ContactSelect.style";
import { COLORS } from "../../theme";

interface ContactSelectProps {
  selectedRecipient: Recipient | null;
  onSelectRecipient: (recipient: Recipient) => void;
}

export const ContactSelect = memo(({ selectedRecipient, onSelectRecipient }: ContactSelectProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [contacts, setContacts] = useState<Recipient[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setLoading(true);
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });

        const formattedContacts: Recipient[] = data
          .filter((contact: Contacts.Contact) => contact.id && contact.name && contact.phoneNumbers?.[0])
          .map((contact: Contacts.Contact) => ({
            id: contact.id!,
            name: contact.name,
            accountNumber: contact.phoneNumbers![0].number!,
          }));

        setContacts(formattedContacts);
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleContactSelect = useCallback((recipient: Recipient) => {
    onSelectRecipient(recipient);
    setModalVisible(false);
  }, [onSelectRecipient]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.accountNumber.includes(searchQuery)
  );

  const renderRecipientItem = ({ item }: { item: Recipient }) => (
    <TouchableOpacity
      style={styles.recipientItem}
      onPress={() => handleContactSelect(item)}
    >
      <View style={styles.recipientInfo}>
        <Text style={styles.recipientName}>{item.name}</Text>
        <Text style={styles.recipientAccount}>{item.accountNumber}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color="#007AFF" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectorText}>
          {selectedRecipient ? selectedRecipient.name : 'Select Contact'}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search contacts..."
              placeholderTextColor={COLORS.GRAY}    
              value={searchQuery}
              onChangeText={setSearchQuery}
            />

            <FlatList
              data={filteredContacts}
              keyExtractor={(item) => item.id}
              renderItem={renderRecipientItem}
              ListEmptyComponent={() => (
                <Text style={styles.emptyText}>No contacts found</Text>
              )}
              ListFooterComponent={loading ? renderFooter : null}
            />

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
});
