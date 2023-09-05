import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // 값 읽기 selector
  const value = useSelector((state) => state);

  // 값 수정 요청 dispatch
  const dispatch = useDispatch();

  console.log(value);
  return (
    <>
      <div>{value}</div>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        감소
      </button>
    </>
  );
}

export default App;
