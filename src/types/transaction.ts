export type Transaction = {
  id: string;
  name: string;
  accountNumber: string;
  transactionDate: string;
  lastTransactionAmount: number;
  transactionType: "deposit" | "withdrawal";
};

export interface UserBalance {
  total: number;
  available: number;
  currency: string;
}
