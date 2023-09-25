import React, { useState } from 'react';
import { CalculatorContext } from '../context/MyContext';

export default function Calculator() {
  const [inputValue, setInputValue] = useState('');
  return (
    <CalculatorContext.Consumer>
      {/* {(value) => <div>결과 : {value}</div>} */}
      {({ result, add, subtract, multiply, divide, reset }) => (
        <>
          <div>결과: {result}</div>
          <input type='number' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <div>
            <button onClick={() => add(Number(inputValue))}>+</button>
            <button onClick={() => subtract(Number(inputValue))}>-</button>
            <button onClick={() => divide(Number(inputValue))}>/</button>
            <button onClick={() => multiply(Number(inputValue))}>*</button>
            <button
              onClick={() => {
                reset(0);
                setInputValue('');
              }}
            >
              C
            </button>
          </div>
        </>
      )}
    </CalculatorContext.Consumer>
  );
}
