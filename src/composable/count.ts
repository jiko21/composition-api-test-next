import { ref } from 'vue';

const useCount = () => {
  const countValue = ref(0);
  const increment = () => {
    countValue.value += 1;
  };
  const decrement = () => {
    countValue.value -= 1;
  };
  return {
    countValue,
    increment,
    decrement,
  };
};

export default useCount;
