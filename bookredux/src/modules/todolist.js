const ADD_TODO = 'todolist/ADD_TODO';
const DELETE_TODO = 'todolist/DELETE_TODO';
const TOGGLE_TODO = 'todolist/TOGGLE_TODO';

export const onAddTodo = (inputValue) => ({ type: ADD_TODO, payload: inputValue });
export const onDeleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const onToggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });

const initialState = { todos: [] };

function todoList(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const content = action.payload;
      const newTodo = {
        id: state.todos.length,
        content,
        isDone: false,
      };
      return { todos: [...state.todos, newTodo] };
    case DELETE_TODO:
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
}

export default todoList;
