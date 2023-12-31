import React from 'react';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input type='checkbox' />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
}

export default function Todos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type='submit'>등록 </button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}
