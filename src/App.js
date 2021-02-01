import Dice from './Dice'
import './App.css';

const RandomDice = () => {
  let random = Math.ceil(Math.random() * 6)
  return <Dice randomValue={random} />
}

function App() {
  return (
    <div className="App">
      <RandomDice />
      <RandomDice />
      <RandomDice />
      <RandomDice />
      <RandomDice />
    </div>
  );
}

export default App;
