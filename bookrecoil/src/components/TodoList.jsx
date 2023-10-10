import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { filterTodo, getTodoList } from '../store/todolist';

export default function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useRecoilState(filterTodo);
  const todos = useRecoilValue(getTodoList);
  const setTodos = useSetRecoilState(getTodoList);

  const onAddTodo = () => {
    setTodos({ type: 'add', payload: { id: todos.length, content: inputValue, isDone: false } });
  };

  const onDeleteTodo = (id) => {
    setTodos({ type: 'delete', payload: id });
  };

  const onToggleTodo = (id) => {
    setTodos({ type: 'toggle', payload: id });
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          value={inputValue}
          placeholder='할 일을 작성해 주세요'
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit' onClick={onAddTodo}>
          추가
        </button>
      </form>
      <p>검색</p>
      <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
      {todos.map((todo) => (
        <section key={todo.id}>
          <input
            type='checkbox'
            onClick={() => {
              onToggleTodo(todo.id);
            }}
          />
          <div style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
            {todo.content}
          </div>
          <button onClick={() => onDeleteTodo(todo.id)}>❌</button>
        </section>
      ))}
    </>
  );
}
