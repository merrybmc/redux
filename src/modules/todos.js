// 액션 타입 정의
// 액션 타입 이름 = 대문자로 정의
// 문자열 내용은 모듈 이름/액션 이름
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// insert가 호출될 때 마다 1씩 더해짐
// id 초기값 설정
let id = 3;

// 파라미터가 필요한 액션 생성 함수
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

// 초기상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트의 리덕스 사용하기',
      done: false,
    },
  ],
};

// 리듀서 함수 만들기
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
