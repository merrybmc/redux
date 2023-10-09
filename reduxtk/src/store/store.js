import { createSlice, configureStore } from '@reduxjs/toolkit';

// 리듀서
const textSize = createSlice({
  name: 'textSize', // 리덕스 식별자 (액션 이름)
  initialState: 20, // 초기값
  reducers: {
    // 리듀서
    increase(state) {
      return (state *= 2);
    },
    decrease(state) {
      return (state /= 2);
    },
  },
});

const counterReducer = createSlice({
  name: 'todoReducer',
  initialState: [{ id: 0, todo: 'todo', isDone: false }],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    toggleTodo(state, action) {
      const toggleTodo = state.find((todo) => todo.id === action.payload);
      if (toggleTodo) toggleTodo.isDone = !toggleTodo.isDone;
    },
    deleteTodo(state, action) {
      state - state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// 리듀서
const textColor = createSlice({
  name: 'textColor', // 리덕스 식별자 (액션 이름)
  initialState: 'black', // 초기값
  reducers: {
    // 리듀서
    changeColor(state, action) {
      return (state = action.payload);
    },
  },
});

// 액션 함수 dispatch의 파라미터로 사용하기 위해 내보내기
export const { increase, decrease } = textSize.actions;
export const { changeColor } = textColor.actions;

// root reducer
export default configureStore({
  reducer: {
    // sub reducer
    textSize: textSize.reducer,
    textColor: textColor.reducer,
  },
});
