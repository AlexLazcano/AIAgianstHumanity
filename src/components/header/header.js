import React, { useState } from 'react'
import { StyledHeader } from './styledHeader'
import JoinButton from '@/components/header/joinButton'
import { StyledInputBox } from './styledInputBox'
import { StyledInputSection } from './styledInputSection'
import DisconnectButton from './disconnectButton'

const Header = ({text, connectFunc, dcFunc}) => {
    const [showLogin, setShowLogin] = useState(true)
    const [joinCode, setCode] = useState(0)
    const change = event => {
        setCode(event.target.value)
    }
    const validateFunction = event => {
        if (joinCode) {
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
                <StyledInputBox value = {joinCode}  onChange={change} />
                <JoinButton validate={validateFunction}/>
                </StyledInputSection> 
                : <DisconnectButton dc={disconnectFunc}/>}
        </>
    )
}

export default Header