import { createSlice, configureStore } from '@reduxjs/toolkit';

// 슬라이스 생성
const textSizeReducer = createSlice({
  name: 'textSize',
  initialState: 20,
  reducers: {
    increase(state) {
      return (state *= 2);
    },
    decrease(state) {
      return (state /= 2);
    },
  },
});

const textColor = createSlice({
  name: 'textColor',
  initialState: 'black',
  reducers: {
    changeColor(state, action) {
      return (state = action.payload);
    },
  },
});

export const { increase, decrease } = textSizeReducer.actions;
export const { changeColor } = textColor.actions;

export default configureStore({
  reducer: {
    textSizeReducer: textSizeReducer.reducer,
    textColor: textColor.reducer,
  },
});
