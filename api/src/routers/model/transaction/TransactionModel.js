import transactionSchema from "./TransactionSchema.js";

export const addTransaction = (obj) => {
  return transactionSchema(obj).save();
};

export const removeTransaction = (_id) => {
  return transactionSchema.findByIdAndDelete(_id);
};
