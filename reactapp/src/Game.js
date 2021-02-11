import React, { useState } from 'react';
import { Container, Row, Button } from 'reactstrap';

import Dice from './Dice'
import Grid from './Grid'

const NB_DICES = 5
let gridPart = ''

function Game(props) {

  if (props.match.params &&
    props.match.params.number &&
    props.match.params.number !== undefined) {
    gridPart = props.match.params.number
  }
  const [dicesSum, setDicesSum] = useState(0)

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

    setDicesSum(tempValues.reduce((a, b) => a + b, 0))
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
      <Row>
        <div className="col col-4 text-center">
          <Button color="primary" onClick={() => handleNewDice()}>Lancer</Button>
          <hr />
          {dices}
        </div>
        <div className="col col-8">
          <Grid dicesSum={dicesSum} gridPart={gridPart} />
        </div>
      </Row>

    </Container>
  );
}

export default Game;
