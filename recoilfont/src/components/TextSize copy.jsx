import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { bgState, customSize, textColor, textSize, textState } from '../store/store';

export default function TextSize({ someLogic }) {
  

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
      <div>크기가 변하는 텍스트</div>
      <div>
        <button onClick={() => setCustomSize(value)}>입력 크기 증가</button>
        <button onClick={someLogic}>크기 증가</button>
        <button
          onClick={}>
          크기 감소
        </button>
        <button
          onClick={}>
          색 변경
        </button>
      </div>
    </div>
  );
}
