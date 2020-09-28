import { mount, VueWrapper } from '@vue/test-utils';
import Todo from '@/components/Todo.vue';
import * as composable from '@/composable/todo';

describe('Todo.vue', () => {
  let wrapper: VueWrapper<any>;
  let addTodoMock: jest.Mock;
  let deleteTodoMock: jest.Mock;

  beforeEach(() => {
    jest.mock('@/composable/todo');
    addTodoMock = jest.fn();
    deleteTodoMock = jest.fn();
    const TODOS = [
      'アドベントカレンダー',
      '修論',
      '筋トレ',
    ];
    jest.spyOn(composable, 'default').mockReturnValue({
      // Reactiveはデータ構造そのままでOK!
      todo: {
        todos: TODOS,
        length: () => TODOS.length,
      },
      addTodo: addTodoMock,
      deleteTodo: deleteTodoMock,
    });
    wrapper = mount(Todo);
  });

  it('correctly renders initial html', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('correctly call addTodo when `追加` button is clicked', () => {
    wrapper.find('#todo-input').setValue('ポスターセッション');
    wrapper.find('.add-btn').trigger('click');
    expect(addTodoMock).toHaveBeenCalledWith('ポスターセッション');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('correctly call deleteTodo when `Delete` button is clicked', () => {
    const INDEX = 1;
    wrapper.findAll('.delete-btn')[INDEX].trigger('click');
    expect(deleteTodoMock).toHaveBeenCalledWith(INDEX);
  });
});
