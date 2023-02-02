import express from "express";
import {
  addData,
  getData,
  removeData,
  updateData,
} from "../Controller/todoController.js";
const router = express.Router();

router.get("/todo", getData);
router.put("/todo/:id", updateData);
router.post("/todo", addData);
router.delete("/todo/:id", removeData);

export default router;
