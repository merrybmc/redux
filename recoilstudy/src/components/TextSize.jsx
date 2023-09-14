import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { bgColor, customSize, textColor, textSize } from '../store/store';

export default function TextSize() {
  const [size, setSize] = useRecoilState(textSize);

  const color = useRecoilValue(textColor);
  const setColor = useSetRecoilState(textColor);

  const bg = useRecoilValue(bgColor);
  const setCustomSize = useSetRecoilState(customSize);

  const [value, setValue] = useState(0);

  const randomColor = () => {
    const colors = ['red', 'blue', 'violet', 'green', 'orange'];
    const randomIdx = Math.floor(Math.random() * colors.length);
    return colors[randomIdx];
  };

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
        background: `${bg}`,
      }}
    >
      <div>텍스트 크기는 ? : {size}</div>
      <div style={{ fontSize: `${size}px`, color: `${color}` }}>크기가 변하는 텍스트</div>
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setCustomSize(value)}>커스텀 크기 증가</button>
      <div>
        <button
          onClick={() => {
            setSize(size * 2);
          }}
        >
          크기 증가
        </button>
        <button
          onClick={() => {
            setSize(size / 2);
          }}
        >
          크기 감소
        </button>
        <button
          onClick={() => {
            setColor(randomColor());
          }}
        >
          색 변경
        </button>
      </div>
    </div>
  );
}
