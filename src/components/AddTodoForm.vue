<template>
  <form @submit.prevent="addNewTodo" class="todo-form">
    <input v-model.trim="title" placeholder="Title" required />
    <select v-model="status" required>
      <option value="Completed">Completed</option>
      <option value="Incompleted">Incompleted</option>
    </select>
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      status: "Completed"
    };
  },
  methods: {
    addNewTodo() {
      if (!this.title || !this.status) return;
      const randomUserId = Math.floor(Math.random() * 10) + 1; 
      const isCompleted = this.status === "Completed";

      this.$store.dispatch("addTodo", {
        todo: this.title,
        completed: isCompleted,
        userId: randomUserId
      });

      this.resetForm();
    },
    resetForm() {
      this.title = "";
      this.status = "Completed";
    }
  }
};
</script>


<style scoped>
.todo-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
}

input,
select {
  padding: 10px;
  font-size: 1rem;
}

button {
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #369e6f;
}
</style>
