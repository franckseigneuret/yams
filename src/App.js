import React, { useState } from 'react';
import { Container, Row, Button } from 'reactstrap';

import Dice from './Dice'
import './App.css';

const NB_DICES = 5

// const [random, setRandom] = useState(between1and6)
// const [count, setCount] = useState(0)

// const shuffle = () => {
//   between1and6 = shuffleBetween1and6()
//   setRandom(between1and6)
//   setCount(count + 1)
// }

function App() {

  const shuffleBetween1and6 = () => Math.ceil(Math.random() * 6)

  const firstValues = []
  const [actualValues, setActualValues] = useState(firstValues)
  const [dicesClickable, setDicesClickable] = useState([true, true, true, true, true])

  const handleNewDice = () => {
    let tempValues = []
    for (let i = 0; i < NB_DICES; i++) {
      if (dicesClickable[i]) {
        tempValues.push(shuffleBetween1and6())
      } else {
        tempValues.push(actualValues[i])
      }
    }

    setActualValues(tempValues)
  }

  const refreshSelectedArray = (state) => {
    const tempState = [...dicesClickable]
    tempState[state.position] = state.blocked
    setDicesClickable(tempState)
    console.log('dicesClickable', dicesClickable)
  }
  const dices = actualValues.map((dice, i) => {
    return <Dice key={i} randomValue={dice} position={i} handleSelect={refreshSelectedArray} />
  })

  return (
    <Container>
      <Row style={{ height: '150px' }}>
        {dices}
      </Row>

      <Row>
        <Button right color="primary" onClick={() => handleNewDice()}>Lancer</Button>
      </Row>
    </Container>
  );
}

export default App;
