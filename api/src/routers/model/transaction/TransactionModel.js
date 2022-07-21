import transactionSchema from "./TransactionSchema.js";

export const addTransaction = (obj) => {
  return transactionSchema(obj).save();
};
