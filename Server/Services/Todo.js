import Todo from "../Models/todoModel.js";

export const getAllTodo = async () => {
  return await Todo.find();
};

export const createTodo = async (data) => {
  console.log(data);
  const todo = new Todo(data);
  await todo.save();
  return todo;
};

export const getTodo = async (id) => {
  return await Todo.findById(id);
};

export const deleteTodo = async (id) => {
  return await Todo.findByIdAndRemove(id);
};

export const updateTodo = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
};
