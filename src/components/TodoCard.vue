<template>
  <div class="card">
    <h4>{{ todo.todo }}</h4>
    <p>{{ todo.completed ? 'Completed' : 'Incompleted' }}</p>
    <button @click="editTodo">Edit</button>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    editTodo() {
  const currentStatus = this.todo.completed ? 'Completed' : 'Incompleted';
  const newStatus = prompt(
    `Edit Completion Status (type 'Completed' or 'Incompleted'):`,
    currentStatus
  );

  if (newStatus && ['Completed', 'Incompleted'].includes(newStatus.trim())) {
    this.$store.dispatch("updateTodo", {
      id: this.todo.id,
      completed: newStatus.trim() === 'Completed'
    });
  } else if (newStatus) {
    alert("Invalid status. Please enter 'Completed' or 'Incompleted'.");
  }
},
    deleteTodo() {
      if (confirm("Delete this todo?")) {
        this.$store.dispatch("deleteTodo", this.todo.id);
      }
    }
  }
};
</script>

<style scoped>
.card {
  padding: 10px;
  background: white;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h4 {
  margin: 0 0 5px;
}

p {
  margin: 0 0 10px;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
}

button:first-of-type {
  background-color: #42b983;
  color: white;
}

button:last-of-type {
  background-color: #e74c3c;
  color: white;
}
</style>
