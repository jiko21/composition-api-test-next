<template>
  <div class="count">
    <h1>{{countValue}}</h1>
    <div class="button-box">
      <button class="plus" @click="increment">+</button>
      <button class="minus" @click="decrement">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCount from '@/composable/count';

export default defineComponent({
  name: 'Count',
  setup() {
    const { countValue, increment, decrement } = useCount();
    return {
      countValue,
      increment,
      decrement,
    };
  },
});
</script>

<style scoped>
</style>
