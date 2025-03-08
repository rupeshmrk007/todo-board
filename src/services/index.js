import axios from 'axios';

const API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data.todos;
};

export const createTodo = async (todo) => {
  const response = await axios.post(`${API_URL}/add`, todo);
  return response.data;
};

export const updateTodo = async (id, todo) => {
  console.log(id,todo)
  const response = await axios.put(`${API_URL}/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};