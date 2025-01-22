export type Transaction = {
  id: string;
  name: string;
  accountNumber: string;
  transactionDate: string;
  lastTransactionAmount: number;
  transactionType: "deposit" | "withdrawal";
};
