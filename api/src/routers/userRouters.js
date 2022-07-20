import express from "express";
const router = express.Router();
import { insertUser } from "./model/userModel.js";

router.post("/", async (req, res, next) => {
  //   const { firstName, lastName, email, password } = req.body;

  try {
    const result = await insertUser(req.body);
    console.log(result);
    console.log(req.body);
    res.json({
      status: "success",
      message: "in the post",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
