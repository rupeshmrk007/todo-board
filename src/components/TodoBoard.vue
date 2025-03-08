<template>
    <div>
      <h1>Todo Board</h1>
      <AddTodoForm @add-todo="createTodo" />
      <div class="board">
        <TodoLane v-for="status in statuses" :key="status" :status="status" :todos="filterTodos(status)" />
      </div>
    </div>
  </template>
  
  <script>
  import TodoLane from "./TodoLane.vue";
  import AddTodoForm from "./AddTodoForm.vue";
  
  export default {
    components: { TodoLane, AddTodoForm },
    data() {
      return {
        statuses: ["Incompleted", "Completed"]
      };
    },
    computed: {
      todos() {
        return this.$store.getters.allTodos;
    }
    },
    methods: {
      filterTodos(status) {
        const completedStatus = status == "Completed" ? true : false;
        return this.todos.filter((todo) => todo.completed == completedStatus);
      },
      async fetchTodos() {
        try {
          await this.$store.dispatch("fetchTodos");
        } catch (error) {
          console.error("Failed to fetch todos:", error);
        }
      },
      createTodo(todo) {
        this.$store.dispatch("addTodo", todo);
      }
    },
    mounted() {
      this.fetchTodos();
    }
  };
  </script>
  
  <style scoped>
  .board {
    display: flex;
    gap: 20px;
  }
  </style>
  