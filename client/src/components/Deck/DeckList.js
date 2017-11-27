import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const CardsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`

const ButtonEditAdd = styled.button`
background-color: black;
color: white;
border-radius: 10px;
`
const ButtonDelete = styled.button`
background-color: grey;
color: black;
border-radius: 10px;
`
class PantryList extends Component {
    render() {
        return (
            <div>
                {this.props.deck.cards.map((card) => {
                    return (
                        <CardsWrapper key={card._id}>
                            <h3>{card.cardName}</h3>
                            <div><ButtonEditAdd onClick={this.props.toggleEditItem}>Edit Me</ButtonEditAdd></div>
                          
                            <div><ButtonDelete onClick={this.props.deleteCard} value={card._id}>delete</ButtonDelete></div>
                        </CardsWrapper>
                    )
                })}
            </div>
        );
    }
}

export default PantryList;