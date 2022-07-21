import express from "express";
const router = express.Router();
import { insertUser } from "./model/userModel.js";

router.get("/:id?", async (req, res, next) => {
  //   const { firstName, lastName, email, password } = req.body;

  try {
    const result = req.params;

    res.json({
      status: "success",
      message: "in the post",
      result,
    });
  } catch (error) {
    next(error);
  }
});
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
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "The email is already taken";
    }
    next(error);
  }
});
export default router;
