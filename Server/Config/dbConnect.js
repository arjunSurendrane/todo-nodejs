import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const db = "mongodb://localhost:27017/ToDo";
    const connect = await mongoose.connect(db);
    console.log("connect to database");
  } catch (error) {
    console.log(`database not connected : ${error}`);
  }
};
