import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "todo must have task name"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
