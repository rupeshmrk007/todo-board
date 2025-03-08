import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, updatedTodo) {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) state.todos[index] = updatedTodo;
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get("https://dummyjson.com/todos");
      commit("setTodos", response.data.todos);
    },
    async addTodo({ commit }, todo) {
      const response = await axios.post("https://dummyjson.com/todos/add", todo);
      commit("addTodo", response.data);
    },
    async updateTodo({ commit }, todo) {
      const data = {completed: todo.completed};
      const response = await axios.put(`https://dummyjson.com/todos/${todo.id}`, data);
      commit("updateTodo", response.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://dummyjson.com/todos/${id}`);
      commit("deleteTodo", id);
    }
  },
  getters: {
    allTodos(state) {
      return state.todos;
    }
  }
});
