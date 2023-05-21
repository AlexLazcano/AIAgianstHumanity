import React from 'react'
import { StyledJoinButton } from './styledJoinButton'

const JoinButton = ({ text, validate }) => {


    return (

        <>
            <StyledJoinButton>
                <button onClick={validate}> Join Game </button>
            </StyledJoinButton>
        </>
        
    )
}

export default JoinButton