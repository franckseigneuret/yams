import React, { useState } from 'react';
import styled from 'styled-components'

const Img = styled.img`
  border: 3px solid white;

  &.selected {
    border: 3px solid red;

  }
`

const Dice = ({ randomValue }) => {

  const [blocked, setBlocked] = useState(false)

  const selectMe = (item) => {
    setBlocked(!blocked)
  }

  return (
    <Img className={`dice dice-${randomValue} ${blocked ? 'selected': ''}`}
      src={`/img/de-${randomValue}.png`}
      alt={randomValue}
      blocked={blocked}
      onClick={selectMe} />
  )
}

export default Dice;
