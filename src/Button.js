import React from 'react';
import styled from 'styled-components'

const Bloc = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;

  background: ${props => props.color === 'grey' ? "#e0e0e0" : "#F39148"};
  color: ${props => props.color === 'grey' ? "#000" : "#FFF"};
  font-size: 20px;
  border: 1px solid #858693;
  cursor: pointer;
`

function Button({ handleClick, name, value, color }) {

  if(color === 'grey') {

    return (
      <Bloc onClick={() => handleClick({name, value})} color={color}>
        {value}
      </Bloc>
    )

  } else {

    return (
      <Bloc color={color}>
        {value}
      </Bloc>
    )

  }

}

export default Button
