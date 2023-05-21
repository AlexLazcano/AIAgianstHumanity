import React from 'react'
import { StyledDcButton } from './styledDcButton'

const DisconnectButton = ({ text, dc }) => {


    return (

        <>
            <StyledDcButton>
                <button onClick={dc}> Disconnect </button>
            </StyledDcButton>
        </>
        
    )
}

export default DisconnectButton