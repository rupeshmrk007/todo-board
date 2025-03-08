<template>
  <div id="app">
    <Board />
  </div>
</template>

<script>
import Board from './components/TodoBoard.vue';

export default {
  components: {
    Board
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f4f4f4;
  min-height: 100vh;
}
</style>
