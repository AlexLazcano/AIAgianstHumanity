import React, { useState } from 'react'
import { StyledHeader } from './styledHeader'
import JoinButton from '@/components/header/joinButton'
import { StyledInputBox } from './styledInputBox'
import { StyledInputSection } from './styledInputSection'
import DisconnectButton from './disconnectButton'
import ReadyButton from './readyButton'
import { StyledInGameSection } from './styledInGameSection'

const Header = ({text, connectFunc, dcFunc, notReady, ready, readyBool}) => {
    const [showLogin, setShowLogin] = useState(true)
    const [joinCode, setCode] = useState(0)
    const change = event => {
        setCode(event.target.value)
    }
    const validateFunction = event => {
        if (joinCode == 4996) {
            setShowLogin(false)
            connectFunc()
        }
    }
    const disconnectFunc = event => {
        setShowLogin(true)
        dcFunc()
    }

    return (
        <>
        <StyledHeader>
            <h>
                AI Against Humanity
            </h>
        </StyledHeader>

        {showLogin ? <StyledInputSection>
            <h>Enter Code</h>

                <StyledInputBox value = {joinCode}  onChange={change} type='number' min={0}/>
                <JoinButton validate={validateFunction}/>
                </StyledInputSection> 
                : 
                <StyledInGameSection>
               <ReadyButton onNotReady={notReady} onReady={ready} ready={readyBool}/>
                <DisconnectButton dc={disconnectFunc}/>
                </StyledInGameSection>}
        </>
    )
}

export default Header