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

  const [randomDices, setRandomDices] = useState([])

  const handleNewDice = () => {
    let dicesValues = []
    const shuffleBetween1and6 = () => Math.ceil(Math.random() * 6)
    
    for (let i = 0; i < NB_DICES; i++) {
      dicesValues.push(shuffleBetween1and6())
    }
    setRandomDices(dicesValues)
  }

  const dices = randomDices.map((dice, i) => {
    console.log(dice)
    return <Dice key={i} randomValue={dice} />
  })

  return (
    <Container>
      <Row>
        {dices}
      </Row>

      <Row>
        <Button color="primary" onClick={() => handleNewDice()}>Lancer</Button>
      </Row>
    </Container>
  );
}

export default App;
