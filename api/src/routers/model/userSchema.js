import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      maxlength: 100,
    },
    lastName: {
      type: String,
      require: true,
      maxlength: 100,
    },
    email: {
      type: String,
      require: true,
      maxlength: 100,
    },
    password: {
      type: String,
      require: true,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema); ///tasks
