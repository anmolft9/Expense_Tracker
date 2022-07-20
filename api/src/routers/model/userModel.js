import userSchema from "./userSchema.js";

export const insertUser = (firstName) => {
  return userSchema(firstName).save();
};
