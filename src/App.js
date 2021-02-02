import React, { useState } from 'react';
import Dice from './Dice'
import './App.css';

const shuffleBetween1and6 = () => {
  return Math.ceil(Math.random() * 6)
}

const RandomDice = () => {
  let between1and6 = shuffleBetween1and6()
  const [random, setRandom] = useState(between1and6)
  const [count, setCount] = useState(0)

  const shuffle = () => {
    between1and6 = shuffleBetween1and6()
    setRandom(between1and6)
    setCount(count + 1)
  }

  return (
    <div>
      <Dice randomValue={random} shuffle={shuffle} />
      <p>{count}</p>
    </div>
  )
}

function App() {
  return (
    <div className="dice-container">
      <RandomDice />
      <RandomDice />
      <RandomDice />
      <RandomDice />
      <RandomDice />
    </div>
  );
}

export default App;
