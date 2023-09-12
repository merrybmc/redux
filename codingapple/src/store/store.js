import { configureStore, createSlice } from '@reduxjs/toolkit';

// 슬라이스 생성
let user = createSlice({
  // 해당 슬라이스의 이름을 지정
  name: 'user',
  initialState: 'Cho Byeong Min',
  reducers: {
    changeName(state) {
      return state + 'john';
    },
    changeName2(state, action) {
      return state + action.payload;
    },
  },
});

let user2 = createSlice({
  // 해당 슬라이스의 이름을 지정
  name: 'user',
  initialState: 'Cho Byeong Min',
  reducers: {
    changeName(state) {
      return state + 'john';
    },
    changeName2(state, action) {
      return state + action.payload;
    },
  },
});

let user3 = createSlice({
  // 해당 슬라이스의 이름을 지정
  name: 'user',
  initialState: 'Cho Byeong Min',
  reducers: {
    // 리듀서 함수
    changeName(state) {
      return state + 'john';
    },
    changeName2(state, action) {
      return state + action.payload;
    },
  },
});

export const { changeName, changeName2 } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    user2: user2.reducer,
    user3: user3.reducer,
  },
});
