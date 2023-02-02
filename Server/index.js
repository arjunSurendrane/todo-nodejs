import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
import clientRouter from "./Routes/client.js";
import { connectToDB } from "./Config/dbConnect.js";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// connect to mongodb database
connectToDB();
// routes
app.use("/", clientRouter);
// create server
app.listen(port, () => {
  console.log(`server connected to localhost ${port}`);
});
