import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import {
  COLORS,
} from "../../theme";
import { Recipient } from "../../types/recipient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import styles from "./TransferScreen.style";

interface RecentRecipient extends Recipient {
  lastTransactionDate: string;
  accountNumber: string;
}

const recentRecipients: RecentRecipient[] = [
  {
    id: "1",
    name: "John Doe",
    accountNumber: "**** 1234",
    lastTransactionDate: "2024-03-20",
  },
  {
    id: "2",
    name: "Jane Smith",
    accountNumber: "**** 5678",
    lastTransactionDate: "2024-03-18",
  },
  {
    id: "3",
    name: "Alice Johnson",
    accountNumber: "**** 9012",
    lastTransactionDate: "2024-03-16",
  },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Transfer">;

const TransferScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp>(); 
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(
    null
  );
  const [note, setNote] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    navigation.navigate("TransferSuccess", {
      transactionId: "123456",
      amount: 100,
      recipientName: "John Doe",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Recent Recipients</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recentList}
        >
          {recentRecipients.map((recipient) => (
            <TouchableOpacity
              key={recipient.id}
              style={styles.recentCard}
              onPress={() => setSelectedRecipient(recipient)}
            >
              <Text style={styles.recipientName}>{recipient.name}</Text>
              <Text style={styles.accountNumber}>
                {recipient.accountNumber}
              </Text>
              <Text style={styles.transactionDate}>
                {recipient.lastTransactionDate}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.label}>Recipient</Text>
        <TouchableOpacity style={[styles.input]}>
          <Text style={styles.inputText}>
            {selectedRecipient?.name || "Select a recipient from contacts"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={[styles.input]}
          value={amount?.toString() || "0"}
          onChangeText={(value) => {
            setAmount(Number(value));
          }}
          keyboardType="numeric"
          placeholder="Enter amount"
          placeholderTextColor={COLORS.GRAY}
          maxLength={100}
        />
        <Text style={styles.label}>Note</Text>
        <TextInput
          style={[styles.input]}
          value={note || ""}
          onChangeText={(value) => {
            setNote(value);
          }}
          placeholder="Add a note (optional)"
          placeholderTextColor={COLORS.GRAY}
          maxLength={100}
        />
        <TouchableOpacity
          style={[styles.transferButton]}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransferScreen;
