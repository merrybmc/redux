import { createSlice, configureStore } from '@reduxjs/toolkit';

const textSize = createSlice({
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

export const { increase, decrease } = textSize.actions;
export const { changeColor } = textColor.actions;

export default configureStore({
  reducer: {
    textSize: textSize.reducer,
    textColor: textColor.reducer,
  },
});
