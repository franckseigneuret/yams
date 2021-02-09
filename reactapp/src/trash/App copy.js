import React, { useState } from 'react';
import { Container, Row, Button } from 'reactstrap';

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

  const handleNewDice = () => {

    return <RandomDice />

  }

  return (
    <Container>
      <Row>
        <RandomDice />
        <RandomDice />
        <RandomDice />
        <RandomDice />
        <RandomDice />
      </Row>

      <Row>
        <Button color="primary" onClick={() => handleNewDice()}>Lancer</Button>
      </Row>
    </Container>
  );
}

export default App;
