import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`

const Dice = ({ randomValue, newShuffle }) => {

  const handleClick = () => {
    newShuffle()
  }

  return (
    <Button onClick={() => handleClick()}>{randomValue}</Button>
  )
}

export default Dice;
