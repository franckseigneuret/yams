import React from 'react';
import styled from 'styled-components'

const Bloc = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;

  background: ${props => props.color ? "#e0e0e0" : "#F39148"};
  color: ${props => props.color ? "#000" : "#FFF"};
  font-size: 20px;
  border: 1px solid #858693;
  cursor: ${props => props.clickable !== undefined ? "pointer" : "auto"};
`

function Button({ handleClick, name, value, color }) {

  if(handleClick !== undefined) {

    return (
      <Bloc onClick={() => handleClick({name, value})} color={color} clickable>
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
