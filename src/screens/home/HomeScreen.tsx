import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./HomeScreen.style";
import { format } from "date-fns";
import { Transaction } from "../../types/transaction";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const transactions: Transaction[] = [
  {
    id: "1",
    name: "John Doe",
    accountNumber: "1234567890",
    transactionDate: "2024-01-01 12:00:00",
    lastTransactionAmount: 100,
    transactionType: "deposit",
  },
  {
    id: "2",
    name: "Jane Doe",
    accountNumber: "0987654321",
    transactionDate: "2024-01-02 12:00:00",
    lastTransactionAmount: 50,
    transactionType: "withdrawal",
  },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const renderTransactionItem = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionMain}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionAccount}>{item.accountNumber}</Text>
        {item.transactionDate && (
          <Text style={styles.transactionDate}>
            {format(new Date(item.transactionDate), "MMM d, yyyy hh:mm:ss")}
          </Text>
        )}
      </View>
      {item.lastTransactionAmount && (
        <Text style={styles.transactionAmount}>
          {item.transactionType === "deposit" ? "+ " : "- "}RM
          {item.lastTransactionAmount.toFixed(2)}
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>RM 1980.12</Text>
      </View>
      <TouchableOpacity
        style={styles.transferButton}
        onPress={() => navigation.navigate("Transfer")}
      >
        <Text style={styles.transferButtonText}>Create New Transfer</Text>
      </TouchableOpacity>
      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderTransactionItem}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
