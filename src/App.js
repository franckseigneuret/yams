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

  // au début il n'y a pas de valeurs
  const [actualValues, setActualValues] = useState([])

  // par défaut les dés sont tous clicables
  const [dicesClickable, setDicesClickable] = useState([true, true, true, true, true])

  // au clic sur le bouton
  const handleNewDice = () => {
    let tempValues = []

    for (let i = 0; i < NB_DICES; i++) {
      // si le bouton est en état clicable
      if (dicesClickable[i]) {
        tempValues.push(shuffleBetween1and6()) // on lui assigne une valeur au hasard
      } else {
        tempValues.push(actualValues[i]) // sinon on maintient sa valeur
      }
    }
    setActualValues(tempValues) //on met à jour le tableau des valeurs en cours
  }

  // au clic sur un dé, on met à jour son état
  const refreshSelectedArray = (state) => {
    const tempState = [...dicesClickable]
    tempState[state.position] = state.blocked
    setDicesClickable(tempState)
  }

  // construction de l'affichage des dés à partir du tableau de leur valeur
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
