import React from 'react'
import { StyledReadyButton } from './styledReadyButton'

const ReadyButton = ({ text, onReady, onNotReady, ready }) => {


    return (

        <>
            <StyledReadyButton>
            <button onClick={ready ? onNotReady : onReady}>
                {ready ? "Cancel Ready" : "Ready up"}
            </button>
            </StyledReadyButton>
        </>
        
    )
}

export default ReadyButton