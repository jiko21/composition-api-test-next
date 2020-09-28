<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <count />
  <todo />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Count from './components/Count.vue';
import Todo from './components/Todo.vue';

export default defineComponent({
  name: 'App',
  components: {
    Count,
    Todo,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
