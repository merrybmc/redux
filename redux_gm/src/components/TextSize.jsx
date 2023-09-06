import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/textsize';
import { getColor } from '../modules/color';

export default function TextSize() {
  const size = useSelector((state) => state.textSizeReducer.textSize);
  const color = useSelector((state) => state.changeColor.textColor);
  const dispatch = useDispatch();

  const randomColor = () => {
    const colors = ['red', 'blue', 'violet', 'green', 'orange'];
    const randomIdx = Math.floor(Math.random() * color.length);
    return colors[randomIdx];
  };
  console.log(size);
  return (
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
      <div>텍스트 크기는 ? : {size}</div>
      <div style={{ fontSize: `${size}px`, color: `${color}` }}>크기가 변하는 텍스트</div>
      <div>
        <button onClick={() => dispatch(decrease())}>크기 감소</button>
        <button onClick={() => dispatch(increase())}>크기 증가</button>
        <button onClick={() => dispatch(getColor(randomColor()))}>색 변경</button>
      </div>
    </div>
  );
}
