import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import './App.css';
import {
  completedJobsSelector,
  counter,
  fliteredTodoListState,
  jobListState,
  kphState,
  mphState,
  testSelector,
  todoListFilterState,
} from './store/store';

function App() {
  const [count, setCount] = useRecoilState(counter);
  const [todoFilter, setTodoFilter] = useRecoilState(todoListFilterState);
  const todoList = useRecoilValue(fliteredTodoListState);
  const todoFilters = useRecoilValue(testSelector);

  const [jobList, setJobListState] = useRecoilState(jobListState);
  const compleJob = useRecoilValue(completedJobsSelector);

  const mph = useRecoilValue(mphState);
  console.log('mph', mph);

  const [smph, setMph] = useRecoilState(kphState);
  console.log('smph', smph);
  return (
    <>
      <div onClick={() => setCount(count + 1)}>{count}</div>
      <button onClick={() => setTodoFilter('Hello')}>필터1</button>
      <button onClick={() => setTodoFilter('a')}>필터2</button>
      <button onClick={() => setJobListState([...jobList, { isDone: true }])}>잡1</button>
      <button onClick={() => setJobListState([...jobList, { isDone: false }])}>잡2</button>
      <button onClick={() => console.log(compleJob)}>출력</button>
      <button onClick={() => setMph(20)}>setMph</button>
    </>
  );
}

export default App;
