import React from 'react'
import { StyledCard } from './styledCard'

const Card = ({children, isBlack, onClickCard, selected, index}) => {


    return (
        <StyledCard isBlack={isBlack} onClick={() => onClickCard && onClickCard(index)} className={selected ? 'selected' : ''}>
            <p>
                {children}
            </p>
        </StyledCard>
    )
}

export default Card