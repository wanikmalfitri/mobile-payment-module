import {
  UserBalance,
  Transaction,
  TransferPayload,
  TransactionResult,
} from "../types/transaction";
import data from "../data/transactions";

export class TransactionService {
  private static delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static async getBalance(): Promise<UserBalance> {
    await this.delay(800);
    return {
      total: 219403,
      available: 199403,
      currency: "MYR",
    };
  }

  static async processTransfer(
    payload: TransferPayload
  ): Promise<TransactionResult> {
    await this.delay(2000);

    // Simulate insufficient balance
    if (payload.amount > 199403) {
      throw new Error("Insufficient balance");
    }

    // Simulate network error - using strict equality
    if (payload.amount === 999) {
      throw new Error("Network error");
    }

    return {
      success: true,
      transactionId: Math.random().toString(36).substr(2, 9),
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
