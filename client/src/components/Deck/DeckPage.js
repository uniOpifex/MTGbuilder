import React, { Component } from 'react';
import axios from 'axios'
import DeckList from './DeckList'
import styled from 'styled-components'

const DeckWrapper = styled.div`
background-color: rgba(109, 96, 80, .8);
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin: 25px auto;
max-width: 50%;
border-radius: 10px;
box-shadow: inset 0 0 1em black, 0 0 1em white;
`
const ButtonEditAdd = styled.button`
background-color: black;
color: white;
border-radius: 10px;
`
class DeckPage extends Component {
    state = {
        deck: {
            deckName: '',
            cards: []
        },
        addCard: false,
    }

    toggleAddItem = () => {
        this.setState({ addCard: !this.state.addCard })
    }
    

    deleteItem = async (event) => {
        event.preventDefault()
        const { userId, deckId } = this.props.match.params
        const id = event.target.value
        const res = await axios.delete(`/api/users/${userId}/deck/${deckId}/card/${id}`)
        this.setState({ pantry: res.data })
    }
    handleChange = (event, cardId) => {
        const attribute = event.target.name
        const clonedDeck = { ...this.state.deck }
        const item = clonedDeck.cards.find(i => i._id === cardId)
        console.log(item)
        item[attribute] = event.target.value
        this.setState({ deck: clonedDeck })
    }
 

    async componentWillMount(){
        const { userId, deckId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/deck/${deckId}`)
        this.setState({deck: res.data})
    }

    render() {
        return (
            <DeckWrapper>
                <h1>{this.state.deck.deckName}</h1>
                
                <DeckList 
                userId={this.props.match.params.userId}
                deckId={this.props.match.params.deckId}
                deck={this.state.deck}
                deleteCard={this.deleteCard}
                handleChange={this.handleChange}
                />
            </DeckWrapper>
        );
    }
}

export default DeckPage;