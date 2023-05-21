import React, { useEffect, useState } from 'react'
import { StyleCardList } from './style'
import Card from '../card/card'


const CardList = ({ cards, submitCard, disabled }) => {
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
                console.log(card);
                return (
                    <Card key={index} onClickCard={onClickCard} index={index} selected={isSelected}>{card.card ? card.card : card}

                        {card.vote && <div>
                            <p>
                                {card.vote}
                            </p>
                        </div>}
                    </Card>
                )
            })}
            {!(cards.length == 0 || disabled) &&
                <button onClick={() => {
                    !isSubmitted && submitCard(cards[selectedCard])
                    setIsSubmitted(true)
                }} >Confirm Card</button>}
        </StyleCardList>
    )
}

export default CardList