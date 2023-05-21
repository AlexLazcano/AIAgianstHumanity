import React, { useState } from 'react'
import { StyledHeader } from './styledHeader'
import JoinButton from '@/components/header/joinButton'
import { StyledInputBox } from './styledInputBox'
import { StyledInputSection } from './styledInputSection'


const Header = ({text}) => {
    const [showLogin, setShowLogin] = useState(true)
    const [joinCode, setCode] = useState(0)
    const change = event => {
        setCode(event.target.value)
    }
    const validateFunction = event => {
        if (joinCode) {
            setShowLogin(false)
        }
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
                : <></>}
        </>
    )
}

export default Header