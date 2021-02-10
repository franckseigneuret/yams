import React, { useState } from 'react';

import Button from "./Button";

const casesGrid = ['as', 'deux', 'trois', 'quatre', 'cinq', 'six', 'suite', 'full', 'carre', 'yam', 'min', 'max', 'total2']

const Grid = ({ dicesSum }) => {
  const [score, setScore] = useState({
    as: '',
    deux: '',
    trois: '',
    quatre: '',
    cinq: '',
    six: '',
    suite: '',
    full: '',
    carre: '',
    yam: '',
    min: '',
    max: '',
    total2: '',
  })

  const handleClick = async ({ name, value }) => {
    const currentScore = { ...score }

    if (name === 'min' || name === 'max') {
      currentScore[name] = dicesSum
    } else {
      currentScore[name] = value
    }

    if (Number.isInteger(currentScore.min) && Number.isInteger(currentScore.max)) {
      currentScore.total2 = currentScore.max - currentScore.min
    }

    console.log(currentScore)
    setScore(currentScore)

    // maj DB
    let body = '' // as=3&deux=8&trois=3&quatre=12&cinq=&six=&suite=&full=&carre=&yam=&min=17&max=16&total2=-1&
    casesGrid.forEach(element => {
      // ici on utilise currentScore et non score. temps latence du setstate !!
      body += element + '=' + currentScore[element] + '&'
    });

    const f = await fetch('/grid/1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
      })
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
