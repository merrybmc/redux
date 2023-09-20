import React from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { count } from './store';

function App() {
  // 상태 값만 불러오기
  const state = useRecoilValue(count);

  // 상태 변경 함수만 불러오기
  const setState = useSetRecoilState(count);

  // 상태 값, 상태 변경 함수 둘 다 불러오기
  const [state, setState] = useRecoilState(count);
  return (
    <div>
      {state}
      <App2 />
    </div>
  );
}

function App2() {
  return <App3 />;
}

function App3() {
  return <App4 />;
}

function App4() {
  const setState = useSetRecoilState(count);
  return (
    <>
      <button onClick={() => setState((prevState) => prevState + 1)}>증가</button>
    </>
  );
}
