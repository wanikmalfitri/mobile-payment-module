import {
  UserBalance,
  Transaction,
} from "../types/transaction";
import data from "../data/transactions";

export class TransactionService {
  private static delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static async getBalance(): Promise<UserBalance> {
    await this.delay(800);
    return {
      total: 2194.03,
      available: 1994.03,
      currency: "MYR",
    };
  }

  static async getRecentTransactions(page: number = 1): Promise<{
    transactions: Transaction[];
    hasMore: boolean;
  }> {
    await this.delay(1200);

    const allTransactions = data;
    const limit = 10;
    const start = (page - 1) * limit;
    const end = start + limit;
    const transactions = allTransactions.slice(start, end);
    const hasMore = end < allTransactions.length;

    return { transactions, hasMore };
  }
}
