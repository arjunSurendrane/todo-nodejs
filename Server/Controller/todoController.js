import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../Services/Todo.js";

const successResponse = (res, data) => {
  res.status(200).json({
    status: "success",
    data,
  });
};

const errorRespnse = (res, error) => {
  res.status(404).json({
    status: "failed",
    error,
  });
};

export const addData = async (req, res) => {
  try {
    const { todo, status } = req.body;
    const data = await createTodo({ task: todo, status });
    successResponse(res, data);
  } catch (error) {
    errorRespnse(res, error);
  }
};

export const updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const { todo, status } = req.body;
    const data = await updateTodo(id, { task: todo, status });
    successResponse(res, data);
  } catch (error) {
    errorRespnse(res, error);
  }
};

export const removeData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deleteTodo(id);
    successResponse(res, data);
  } catch (error) {
    errorRespnse(res, error);
  }
};

export const getData = async (req, res) => {
  try {
    const data = await getAllTodo();
    successResponse(res, data);
  } catch (error) {
    errorRespnse(res, error);
  }
};
