import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeName2 } from './store/store';

function App() {
  let data = useSelector((state) => state);
  console.log(data);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeName());
    console.log(data);
  };

  const handleChange2 = (name) => {
    dispatch(changeName2(name));
    console.log(data);
  };
  return (
    <>
      <button
        onClick={() => {
          handleChange();
        }}
      >
        클릭
      </button>
      <button
        onClick={() => {
          handleChange2('호호');
        }}
      >
        클릭2
      </button>
    </>
  );
}

export default App;
