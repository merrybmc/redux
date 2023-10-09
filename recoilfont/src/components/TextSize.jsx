import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { bgState, customSize, textColor, textSize, textState } from '../store/store';

export default function TextSize({ someLogic }) {
  const [size, setSize] = useRecoilState(textSize);
  const [color, setColor] = useRecoilState(textColor);
  const [state, setState] = useRecoilState(textState);
  const bgColor = useRecoilValue(bgState);
  const setCustomSize = useSetRecoilState(customSize);
  const [value, setValue] = useState(0);

  const randomColor = () => {
    const colors = ['red', 'blue', 'violet', 'green', 'orange'];
    const randomIdx = Math.floor(Math.random() * colors.length);
    return colors[randomIdx];
  };

  const stateChange = (command) => {
    command === 'increase' && setState((prevState) => ({ ...prevState, size: prevState.size * 2 }));
    command === 'decrease' && setState((prevState) => ({ ...prevState, size: prevState.size / 2 }));
    command === 'color' && setState({ ...state, color: randomColor() });
    console.log(state);
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
        backgroundColor: `${bgColor}`,
      }}
    >
      <input onChange={(e) => setValue(e.target.value)} />
      <div>텍스트 크기는 ? : {size} </div>
      <div style={{ fontSize: `${size}px`, color: `${color}` }}>크기가 변하는 텍스트</div>
      <div>
        <button onClick={() => setCustomSize(value)}>입력 크기 증가</button>
        <button onClick={someLogic}>크기 증가</button>

        <button
          onClick={() => {
            setSize(size / 2);
            stateChange('decrease');
          }}
        >
          크기 감소
        </button>
        <button
          onClick={() => {
            setColor(randomColor());
            stateChange('color');
          }}
        >
          색 변경
        </button>
      </div>
    </div>
  );
}
