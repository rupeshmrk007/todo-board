<template>
  <div class="lane">
    <h3>{{ status }}</h3>
    <!-- Loop through localTodos and render TodoCard components -->
    <div v-for="(todo, index) in localTodos" :key="todo.id" class="todo-item" @dragstart="dragStart(index)" @dragover.prevent @drop="drop(index)" draggable="true">
      <TodoCard :todo="todo" />
    </div>

    <!-- Fallback for empty lanes -->
    <p v-if="!localTodos.length">No todos in this lane.</p>
  </div>
</template>

<script>
import TodoCard from "./TodoCard.vue";

export default {
  components: { TodoCard },
  props: {
    status: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      localTodos: []
    };
  },
  watch: {
    todos: {
      handler(newTodos) {
        this.localTodos = [...newTodos];
      },
      immediate: true
    }
  },
  methods: {
    dragStart(index) {
      this.draggedTodo = this.localTodos[index];
      this.draggedIndex = index;
    },
    async drop(newIndex) {
      if (this.draggedIndex === newIndex) return; // No changes if dropped in the same place
      
      // Remove from old position and insert into new position
      const [movedTodo] = this.localTodos.splice(this.draggedIndex, 1);
      this.localTodos.splice(newIndex, 0, movedTodo);

      // Update status and trigger Vuex action
      movedTodo.completed = this.status == "Completed" ? true : false;
      await this.$store.dispatch("updateTodo", movedTodo);
    }
  }
};
</script>

<style scoped>
.lane {
  flex: 1;
  background: #f3f3f3;
  padding: 10px;
  border-radius: 5px;
  min-height: 400px;
}

h3 {
  margin-bottom: 10px;
}

.todo-item {
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: grab;
}

p {
  color: #777;
  font-style: italic;
}
</style>
