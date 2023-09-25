const ADD_NUMBER = 'calculator/ADD_NUMBER';
const SUBTRACT_NUMBER = 'calculator/SUBTRACT_NUMBER';
const MULTIPLY_NUMBER = 'calculator/MULTIPLY_NUMBER';
const DIVIDE_NUMBER = 'calculator/DIVIDE_NUMBER';
const RESET_NUMBER = 'calculator/RESET_NUMBER';

export const onAddNumber = (number) => ({ type: ADD_NUMBER, payload: number });
export const onSubtractNumber = (number) => ({ type: SUBTRACT_NUMBER, payload: number });
export const onMultiplyNumber = (number) => ({ type: MULTIPLY_NUMBER, payload: number });
export const onDivideNumber = (number) => ({ type: DIVIDE_NUMBER, payload: number });
export const onResetNumber = () => ({ type: RESET_NUMBER });

const initialState = 0;

function calculator(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return (state = state + Number(action.payload));
    case SUBTRACT_NUMBER:
      return (state = state - Number(action.payload));
    case MULTIPLY_NUMBER:
      return (state = state * Number(action.payload));
    case DIVIDE_NUMBER:
      return (state = state / Number(action.payload));
    case RESET_NUMBER:
      return (state = 0);
    default:
      return state;
  }
}

export default calculator;
