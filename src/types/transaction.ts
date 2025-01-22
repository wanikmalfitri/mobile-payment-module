export type Transaction = {
  id: string;
  name: string;
  accountNumber: string;
  transactionDate: string;
  lastTransactionAmount: number;
  transactionType: "deposit" | "withdrawal";
};

export interface TransferPayload {
  recipientId: string;
  amount: number;
  note?: string;
}

export interface TransactionResult {
  success: boolean;
  error?: string;
  transactionId?: string;
}

export interface UserBalance {
  total: number;
  available: number;
  currency: string;
}
