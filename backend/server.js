import express from "express";
import env from "dotenv/config";
import connectDB from "./config/db.js";
import router from "./Routers/goalRouter.js";
import userRouter from "./Routers/userRouter.js";
import ErrorHandler from "./Middlewares/ErrorHandler.js";
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", router);
app.use("/api/users", userRouter);
app.use(ErrorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
