import { computed, reactive } from 'vue';

const useTodo = () => {
  const todo = reactive({
    todos: [] as string[],
    length: computed(() => todo.todos.length),
  }) as any;
  const addTodo = (item: string) => {
    todo.todos.push(item);
  };
  const deleteTodo = (index: number) => {
    todo.todos.splice(index, 1);
  };
  return {
    todo,
    addTodo,
    deleteTodo,
  };
};

export default useTodo;
