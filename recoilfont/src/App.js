import TextSize from './components/TextSize';

function App() {
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
    <div>
      <TextSize size={size} />
    </div>
  );
}

export default App;
