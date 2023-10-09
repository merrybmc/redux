import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNumber,
  onDivideNumber,
  onMultiplyNumber,
  onResetNumber,
  onSubtractNumber,
} from '../modules/calculator';

export default function Calculator() {
  const [inputValue, setInputValue] = useState('');

  const result = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  console.log(result);

  return (
    <>
      <div>결과: {result}</div>
      <input type='number' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <div>
        <button onClick={() => dispatch(onAddNumber(inputValue))}>+</button>
        <button onClick={() => dispatch(onSubtractNumber(inputValue))}>-</button>
        <button onClick={() => dispatch(onDivideNumber(inputValue))}>/</button>
        <button onClick={() => dispatch(onMultiplyNumber(inputValue))}>*</button>
        <button onClick={() => dispatch(onResetNumber())}>C</button>
      </div>
    </>
  );
}
