import express from "express";
import {
  addTransaction,
  removeTransaction,
} from "./model/transaction/TransactionModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    // console.log("hunter");
    // console.log(req.body);
    const result = await addTransaction(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "posted",
        })
      : res.json({
          status: "failed",
          message: "not posted",
        });
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    res.json({
      status: "success",
      message: "todo",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
