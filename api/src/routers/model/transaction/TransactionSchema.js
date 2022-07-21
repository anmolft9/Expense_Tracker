import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Transaction", transactionSchema);
