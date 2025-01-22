import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import {
  ALIGNMENT,
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from "../../theme";
import { Recipient } from "../../types/recipient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  content: {
    padding: SPACING.MEDIUM,
  },
  label: {
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    marginBottom: SPACING.XSMALL,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    borderRadius: BORDER_RADIUS.SMALL,
    padding: SPACING.MEDIUM,
    marginBottom: SPACING.LARGE,
    borderWidth: BORDER_WIDTH.THIN,
    borderColor: COLORS.GRAY,
    fontSize: FONT_SIZE.MEDIUM,
  },
  inputText: {
    color: COLORS.GRAY,
    fontSize: FONT_SIZE.MEDIUM,
  },
  transferButton: {
    backgroundColor: COLORS.PRIMARY,
    padding: SPACING.MEDIUM,
    alignItems: ALIGNMENT.CENTER,
    borderRadius: BORDER_RADIUS.FULL,
    borderWidth: BORDER_WIDTH.MEDIUM,
    borderColor: COLORS.WHITE,
  },
  disabledButton: {
    backgroundColor: COLORS.GRAY,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
  },
  recentList: {
    marginBottom: SPACING.XLARGE,
    marginHorizontal: -SPACING.MEDIUM,
    paddingHorizontal: SPACING.MEDIUM,
  },
  recentCard: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: BORDER_RADIUS.SMALL,
    borderWidth: BORDER_WIDTH.MEDIUM,
    borderColor: COLORS.PRIMARY,
    padding: SPACING.SMALL,
    marginRight: SPACING.MEDIUM,
    minWidth: 150,
  },
  recipientName: {
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: COLORS.WHITE,
    marginBottom: SPACING.XSMALL,
  },
  accountNumber: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.MUTED_WHITE,
    marginBottom: SPACING.XSMALL,
  },
  transactionDate: {
    fontSize: FONT_SIZE.SMALL,  
    color: COLORS.MUTED_WHITE,
  },
});
