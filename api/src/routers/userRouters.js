import express from "express";
const router = express.Router();

router.post("/", (req, res, next) => {
  //   const { firstName, lastName, email, password } = req.body;

  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "in the post",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
