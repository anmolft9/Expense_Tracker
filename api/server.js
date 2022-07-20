import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

///db connection
import { dbConnect } from "./src/routers/config/dbConfig.js";
dbConnect();

//middleware
app.use(express.json());
app.use(cors());

///API
import userRouters from "./src/routers/userRouters.js";
app.use("/api/v1/user", userRouters);

app.use("/api/v1/user", () => {
  res.json({
    status: "success",
    message: "in the API base",
  });
});

app.use("/", (req, res) => {
  try {
    res.send("<h1>hey...</h1>");
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  //   console.log(error, "error");
  const status = error.status || 500;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`http://localhost:${PORT}`);
});
