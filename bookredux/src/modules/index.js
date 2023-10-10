import { combineReducers } from 'redux';
import calculator from './calculator';
import todoList from './todolist';

const rootReducer = combineReducers({
  calculator,
  todoList,
});

console.log('combine', combineReducers);

export default rootReducer;
