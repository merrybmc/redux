import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAddTodo, onDeleteTodo, onToggleTodo } from '../modules/todolist';

export default function TodoList() {
  const todos = useSelector((state) => state.todoList.todos);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          value={inputValue}
          placeholder='할 일을 작성해 주세요'
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type='submit'
          onClick={() => {
            dispatch(onAddTodo(inputValue));
          }}
        >
          추가
        </button>
      </form>
      {todos.map((todo) => (
        <section key={todo.id}>
          <input
            type='checkbox'
            onClick={() => {
              dispatch(onToggleTodo(todo.id));
            }}
          />
          <div style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
            {todo.content}
          </div>
          <button
            onClick={() => {
              dispatch(onDeleteTodo(todo.id));
            }}
          >
            ❌
          </button>
        </section>
      ))}
    </>
  );
}

// {todos.map((todo) => (
//   <section key={todo.id}>
//     <input type='checkbox' onClick={() => onToggleTodo(todo.id)} />
//     <div style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
//       {todo.content}
//     </div>
//     <button onClick={() => onDeleteTodo(todo.id)}>❌</button>
//   </section>
// ))}
