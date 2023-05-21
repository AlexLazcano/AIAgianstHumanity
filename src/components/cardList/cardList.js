import React, { useEffect, useState } from 'react'
import { StyleCardList } from './style'
import { StyledConfirmButton } from './styledConfirmButton'
import Card from '../card/card'


const CardList = ({ cards, submitCard, disabled, isVote }) => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    // useEffect(() => {
    //     // console.log(selectedCard)


    // }, [selectedCard])


    const onClickCard = (index) => {
        !isSubmitted && setSelectedCard(index)
    }



    return (
        <StyleCardList>
            {cards.map((card, index) => {
                const isSelected = selectedCard == index
                // console.log(card);
                return (
                    <Card votes={card.votes} key={index} onClickCard={onClickCard} index={index} selected={isSelected}>{card.card ? card.card : card}</Card>
                )
            })}
            <StyledConfirmButton>            
            {!(cards.length == 0 || disabled) &&
                <button onClick={() => {
                    // !isSubmitted && 
                    submitCard(cards[selectedCard])
                    setIsSubmitted(true)
                }} >Confirm Card</button>}
            </StyledConfirmButton>
        </StyleCardList>
    )
}

export default CardList