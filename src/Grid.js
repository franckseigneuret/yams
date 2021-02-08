import React, { useState } from 'react';

import Button from "./Button";


const Grid = ({ dicesSum }) => {
  const [score, setScore] = useState({
    // as: '',
    // deux: '',
    // trois: '',
    // quatre: '',
    // cinq: '',
    // six: '',
    // suite: '',
    // full: '',
    // carre: '',
    // yam: '',
    min: '',
    max: '',
  })

  const handleClick = ({ name, value }) => {
    const currentScore = { ...score }

    if (name === 'min' || name === 'max') {
      currentScore[name] = dicesSum
    } else {
      currentScore[name] = value
    }

    setScore(currentScore)
  }

  return (
    <div className="App">

      <div style={{ display: 'flex' }}>
        <Button value="MOINS" />
        <Button
          handleClick={handleClick}
          name="min"
          value={score.min}
          color="grey"
        />
      </div>

      <div style={{ display: 'flex' }}>
        <Button value="PLUS" />
        <Button
          handleClick={handleClick}
          name="max"
          value={score.max}
          color="grey"
        />
      </div>
    </div>
  )
}

export default Grid
