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
    total2: '',
  })

  const handleClick = ({ name, value }) => {
    const currentScore = { ...score }

    if (name === 'min' || name === 'max') {
      currentScore[name] = dicesSum
    } else {
      currentScore[name] = value
    }

    if(Number.isInteger(currentScore.min) && Number.isInteger(currentScore.max)){
      currentScore.total2 = currentScore.max - currentScore.min
    }

    setScore(currentScore)
  }

  return (
    <div className="App">

      <div style={{ display: 'flex' }}>
        <Button value="AS" />
        <Button
          handleClick={handleClick}
          name="as"
          value={score.as}
          color="grey"
        />
      </div>

      <div style={{ display: 'flex' }}>
        <Button value="DEUX" />
        <Button
          handleClick={handleClick}
          name="deux"
          value={score.deux}
          color="grey"
        />
      </div>

      <div style={{ display: 'flex' }}>
        <Button value="TOTAL" />
        <Button
          value=""
          color="grey"
        />
      </div>

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

      <div style={{ display: 'flex' }}>
        <Button value="TOTAL II" />
        <Button
          name="total2"
          value={score.total2}
          color="grey"
        />
      </div>
    </div>
  )
}

export default Grid
