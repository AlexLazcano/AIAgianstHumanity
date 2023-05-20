import React from 'react'
import { useState } from 'react'

import { styled } from 'styled-components'

const StyledTest = styled.div`
  color: ${props => props.color};
`

const Test = () => {
  const [state, setState] = useState(0)
  

  return (
    <>
    <StyledTest color={false ? "red" : "blue"}>{state}</StyledTest>
    <button onClick={() => setState(state + 1)}>Click me</button>
    </>
  
  )
}

export default Test