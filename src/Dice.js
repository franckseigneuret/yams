import React, { useState } from 'react';
import styled from 'styled-components'

const Img = styled.img`
  border: 3px solid white;

  &.selected {
    border: 3px solid red;
  }
`

const Dice = ({ randomValue, position, handleSelect }) => {

  const [blocked, setBlocked] = useState(false)

  // au clic du dé
  const selectMe = (item) => {
    setBlocked(!blocked) // on inverse son statut blocked
    handleSelect({blocked, position}) // on utilise la fonction envoyée dans les props pour informer le parent sur son nouvel état
  }

  return (
    <Img className={`dice dice-${randomValue} ${blocked ? 'selected': ''}`}
      src={`/img/de-${randomValue}.png`}
      alt={randomValue}
      blocked={blocked}
      position={position}
      onClick={selectMe} />
  )
}

export default Dice;
