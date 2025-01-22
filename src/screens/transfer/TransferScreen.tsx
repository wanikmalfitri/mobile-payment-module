import React, { useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../../theme";
import { Recipient } from "../../types/recipient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import styles from "./TransferScreen.style";
import { recentRecipients } from "../../data/transactions";
import { formatDistance } from "date-fns";
import { TransferPayload } from "../../types/transaction";
import { TransactionResult } from "../../types/transaction";
import { TransactionService } from "../../services/TransactionService";
import { BiometricAuth } from "../../utils/biometric";
import { ContactSelect } from "../../components/contactSelect/ContactSelect";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Transfer">;

const TransferScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(
    null
  );
  const [note, setNote] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | null>(null);

  const formattedAmount = useMemo(() => {
    if (!amount) return "MYR0.00";
    if (amount > 100000000) return "MYR++++";
    return `MYR${(amount / 100).toFixed(2)}`;
  }, [amount]);

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!selectedRecipient) {
      Alert.alert("Please select a recipient");
      return;
    }

    if (!amount || isNaN(amount)) {
      Alert.alert("Please enter a valid amount");
      return;
    }

    if (amount < 100) {
      Alert.alert("Minimum amount is MYR1.00");
      return;
    }

    if (amount > 100000000) {
      Alert.alert("Maximum amount is MYR1000000.00");
      return;
    }

    if (note && note.trim().length > 100) {
      Alert.alert("Note cannot exceed 100 characters");
      return;
    }

    try {
      setLoading(true);
      const result = await processTransfer({
        recipientId: selectedRecipient.id,
        amount: amount,
        note: note || "",
      });

      if (result.success) {
        navigation.navigate("TransferSuccess", {
          transactionId: result.transactionId,
          amount: amount,
          recipientName: selectedRecipient.name,
          note: note || "",
        });
      }
    } catch (error) {
      Alert.alert((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const processTransfer = useCallback(
    async (payload: TransferPayload): Promise<TransactionResult> => {
      // Check biometric availability and authenticate
      const isBiometricAvailable = await BiometricAuth.isBiometricAvailable();
      if (isBiometricAvailable) {
        const authenticated = await BiometricAuth.authenticate();
        if (!authenticated) {
          throw new Error("Authentication failed");
        }
      }

      const result = await TransactionService.processTransfer(payload);
      if (!result.success) {
        throw new Error(result.error);
      }
      return result;
    },
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.recentListTitle}>Recent Recipients</Text>
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
                {formatDistance(
                  new Date(recipient.lastTransactionDate),
                  new Date(),
                  { addSuffix: true }
                )}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.label}>Recipient</Text>
        {/* <TouchableOpacity style={[styles.input]}>
          {
            selectedRecipient ? (
              <Text style={styles.inputRecipient}>
                {selectedRecipient.name}
              </Text>
            ) : (
              <Text style={styles.inputText}>
                {"Select a recipient from contacts"}
              </Text>
            )
          }
        </TouchableOpacity> */}
        <ContactSelect selectedRecipient={selectedRecipient} onSelectRecipient={setSelectedRecipient} />
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={[styles.input]}
          value={amount?.toString() || ""}
          onChangeText={(value) => {
            const numericValue = value.replace(/[^0-9]/g, '');
            setAmount(numericValue ? Number(numericValue) : null);
          }}
          keyboardType="numeric"
          placeholder="Enter amount"
          placeholderTextColor={COLORS.GRAY}
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
          <Text style={styles.buttonText}>Transfer {formattedAmount}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransferScreen;
