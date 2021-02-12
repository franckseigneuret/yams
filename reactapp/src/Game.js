import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';

import Dice from './Dice'
import Grid from './Grid'

const NB_DICES = 5
let gridPartFromURL = undefined

function Game(props) {

  const [dicesSum, setDicesSum] = useState(0)
  const [lastPartNumber, setLastPartNumber] = useState()
  // au début il n'y a pas de valeurs
  const [actualValues, setActualValues] = useState([])
  // par défaut les dés sont tous clicables
  const [dicesClickable, setDicesClickable] = useState([true, true, true, true, true])

  const shuffleBetween1and6 = () => Math.ceil(Math.random() * 6)

  // au clic sur le bouton "Lancer"
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

  // connaitre le num° de la dernière partie
  useEffect(() => {

    if (props.match.params && props.match.params.number && props.match.params.number !== undefined) {
      gridPartFromURL = props.match.params.number
      console.log('gridPartFromURL', gridPartFromURL)
    }

    if (!gridPartFromURL) {

      (async () => {
        await fetch(`/last-part`, {
          method: 'GET',
        })
          .then(response => response.json())
          .then(data => {
            setLastPartNumber(data.lastPart)
          })
      })()
    }
  }, [])

  return (
    <Container>
      <Row>
        <div className="col col-4 text-center">
          <Button color="primary" onClick={() => handleNewDice()}>Lancer</Button>
          {
            lastPartNumber ?
              <Button color="primary" href={`/grid/${lastPartNumber.partie}`}>Dernière partie</Button>
              : ''
          }
          <hr />
          {dices}
        </div>
        <div className="col col-8">
          {/* <Grid dicesSum={dicesSum} lastPartNumber={lastPartNumber} score={lastPart} /> */}
          <Grid dicesSum={dicesSum} lastPartNumber={lastPartNumber} />
        </div>
      </Row>

    </Container>
  );
}

export default Game;
