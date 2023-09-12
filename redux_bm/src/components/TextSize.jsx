import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase, changeColor } from '../store/store';

export default function TextSize() {
  const size = useSelector((state) => state.textSizeReducer);
  const color = useSelector((state) => state.textColor);
  const dispatch = useDispatch();

  console.log('color', color);

  const randomColor = () => {
    const colors = ['red', 'blue', 'violet', 'green', 'orange'];
    const randomIdx = Math.floor(Math.random() * colors.length);
    return colors[randomIdx];
  };
  return (
    <div>
      <div>텍스트 크기는 ? : {size}</div>
      <div style={{ fontSize: `${size}px`, color: color }}>텍스트</div>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <button
          onClick={() => {
            dispatch(increase());
          }}
        >
          크기 증가
        </button>
        <button
          onClick={() => {
            dispatch(decrease());
          }}
        >
          크기 감소
        </button>
        <button
          onClick={() => {
            dispatch(changeColor(randomColor()));
          }}
        >
          색상 변경
        </button>
      </div>
    </div>
  );
}
