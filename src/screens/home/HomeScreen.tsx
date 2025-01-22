import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./HomeScreen.style";
import { format } from "date-fns";
import { Transaction } from "../../types/transaction";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TransactionService } from "../../services/TransactionService";
import { Skeleton } from "../../components/Skeleton";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState<boolean>(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>(
    []
  );
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState<number>(1);

  useEffect(() => {
    initData();
  }, []); 

  const initData = async () => {
    setLoading(true);
    try {
      const balance = await TransactionService.getBalance();
      setBalance(balance.available/100);
      await getRecentTransactions(1);
    } catch (error) {
      console.error("Failed to load initial data", error);
    } finally {
      setLoading(false);
    }
  };

  const getRecentTransactions = async (page: number) => {
    try {
      const { transactions, hasMore: more } =
        await TransactionService.getRecentTransactions(page);
      setRecentTransactions((prev) => [...prev, ...transactions]);
      setHasMore(more);
      setPageNum(page);
    } catch (error) {
      console.error("Failed to load recent recipients:", error);
    }
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      getRecentTransactions(pageNum + 1);
    }
  };

  const renderBalance = () => {
    if (loading) {
      return (
        <View style={styles.balanceCard}>
          <Skeleton width={130} height={16} />
          <Skeleton width={180} height={40} style={{ marginTop: 14 }} />
        </View>
      );
    }

    return (
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>
          RM {balance?.toFixed(2) ?? "0.00"}
        </Text>
      </View>
    );
  };

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
          {(item.lastTransactionAmount/100).toFixed(2)}
        </Text>
      )}
    </View>
  );

  const renderLoadingTransactions = () => (
    <>
      {[1, 2, 3,4, 5, 6, 7].map((key) => (
        <View key={`skeleton-${key}`} style={styles.transactionItem}>
          <View style={styles.transactionMain}>
            <Skeleton width={150} height={16} />
            <Skeleton width={120} height={14} style={{ marginTop: 4 }} />
            <Skeleton width={80} height={12} style={{ marginTop: 4 }} />
          </View>
          <Skeleton width={70} height={16} />
        </View>
      ))} 
    </>
  );
 
  return (
    <View style={styles.container}>
      {renderBalance()}
      <TouchableOpacity
        style={styles.transferButton}
        onPress={() => navigation.navigate("Transfer")}
      >
        <Text style={styles.transferButtonText}>Create New Transfer</Text>
      </TouchableOpacity>
      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {loading ? (
          renderLoadingTransactions()
        ) : (
          <FlatList
            data={recentTransactions}
            keyExtractor={(item) => item.id}
            renderItem={renderTransactionItem}
            ListEmptyComponent={() => (
              <Text style={styles.emptyText}>No recent transactions</Text>
            )}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.2}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
