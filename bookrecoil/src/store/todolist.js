import { atom, selector } from 'recoil';

const todoList = atom({ key: 'todolist', default: { todos: [] } });
export const filterTodo = atom({ key: 'filterTodo', default: '' });

export const getTodoList = selector({
  key: 'getTodoList',
  get: ({ get }) => {
    const { todos } = get(todoList);
    const filter = get(filterTodo);
    if (filter === '') return todos;
    return todos.filter((todo) => todo.content.includes(filter));
  },

  set: ({ set }, action) => {
    set(todoList, (prevState) => {
      switch (action.type) {
        case 'add': {
          return { todos: [...prevState.todos, action.payload] };
        }
        case 'delete': {
          const filteredTodos = prevState.todos.filter((todo) => todo.id !== action.payload);
          return { todos: filteredTodos };
        }
        case 'toggle': {
          const filteredTodos = prevState.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
          );
          return { todos: filteredTodos };
        }
        default:
          return todoList;
      }
    });
  },
});
