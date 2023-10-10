import { resultState, inputValueState } from '../store/calculator';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export default function Calculator() {
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const result = useRecoilValue(resultState);
  const setResult = useSetRecoilState(resultState);

  const add = (value) => setResult((prev) => prev + value);
  const subtract = (value) => setResult((prev) => prev - value);
  const multiply = (value) => setResult((prev) => prev * value);
  const divide = (value) => setResult((prev) => prev / value);
  const reset = () => setResult(0);

  return (
    <>
      <div>계산 결과: {result}</div>
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
  );
}
