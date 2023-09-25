// Context 객체를 만들어 상태값을 저장하는 역할을 하는 파일

// createContext 함수
// 파라미터로 초기값을 받는다.

import { createContext } from 'react';

// const CalculatorContext = createContext('초기값');

export const CalculatorContext = createContext({
  result: 0,
  add: () => {},
  subtract: () => {},
  multiply: () => {},
  divide: () => {},
  reset: () => {},
});

export const TodoContext = createContext({
  todos: [],
  onAddTodo: () => {},
  onDeleteTodo: () => {},
  onToggleTodo: () => {},
});
