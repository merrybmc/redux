import './App.css';
import Todos from './components/Todos';
import CounterContainers from './containers/CounterContainers';

function App() {
  return (
    <div>
      <CounterContainers />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
