import React from 'react'
import { StyledCard } from './styledCard'

const Card = ({ children, isBlack, onClickCard, selected, index, votes }) => {


    return (
        <StyledCard isBlack={isBlack} onClick={() => onClickCard && onClickCard(index)} className={selected ? 'selected' : ''}>
            <p>
                {children}
            </p>
            {
                votes && <div>{votes}</div>
            }
        </StyledCard>
    )
}

export default Card