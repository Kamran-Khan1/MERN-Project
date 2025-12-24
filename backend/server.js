import express from "express";
import env from "dotenv/config";
import router from "./Routers/goalRouter.js";
import ErrorHandler from "./Middlewares/ErrorHandler.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", router);
app.use(ErrorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
