import React, { Component } from 'react';
import styled from 'styled-components';

import axios from 'axios'
import { Link } from 'react-router-dom'
import DeckForm from '../Deck/DeckForm'
import EditDeck from '../Deck/EditDeck'


const CardNameWrapper = styled.a`
text-decoration: none;
font-size: 30px;
color: rgb(216, 188, 65);
text-transform: uppercase;
font-weight: bold;
`

const UserWrapper = styled.div`
background-color: rgba(109, 96, 80, .8);
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
margin: 25px auto;
max-width: 50%;
border-radius: 10px;
box-shadow: inset 0 0 1em black, 0 0 1em white;
`
const ButtonDelete = styled.button`
background-color: grey;
color: black;
border-radius: 10px;
`
const ButtonEditAdd = styled.button`
background-color: black;
color: white;
border-radius 10px;
`

class UserPage extends Component {
    state = {
        user: {
            userName: '',
            password: '',
            deck: []
        },
        
    }

    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }


    deleteDeck = async (event) => {
        event.preventDefault()
        const { userId } = this.props.match.params
        const id = event.target.value
        const res = await axios.delete(`/api/users/${userId}/deck/${id}`)
        this.setState({ deck: res.data })
    }

    createNewDeck = async (newDeck) => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/deck`, {
            "deck": newDeck
        })
        this.setState({ user: res.data })
    }
    updateDeck = async (deckId) => {
        const { userId } = this.props.match.params
        const id = deckId
        const clonedUser = { ...this.state.user }
        const deck = clonedUser.deck.find(i => i._id === deckId)
        const res = await axios.patch(`/api/users/${userId}/deck/${id}`, {
            deck: deck
        })
        this.setState({ user: res.data })
    }

    handleChange = (event, deckId) => {
        const attribute = event.target.name
        const clonedUser = { ...this.state.user }
        const deck = clonedUser.deck.find(i => i._id === deckId)
        console.log(deck)
        deck[attribute] = event.target.value
        this.setState({ user: clonedUser })
    }
    



    render() {
        return (
            <UserWrapper>
                <h1>{this.state.user.userName}</h1>
                {this.state.user.deck.map((deck) => {
                    return (
                        <div key={deck._id}>
                            <Link to={`/user/${this.state.user._id}/deck/${deck._id}`}><CardNameWrapper>{deck.deckName}</CardNameWrapper></Link>
                            <div><ButtonDelete value={deck._id} onClick={this.deleteDeck}>Delete</ButtonDelete></div>
                            <div><ButtonEditAdd onClick={this.toggleAdmin}>{this.state.admin ? 'Hide' : 'Edit this Deck'}</ButtonEditAdd></div>
                            {this.state.admin ? <EditDeck
                                handleChange={this.handleChange}
                                updatePantry={this.updateDeck}
                                deck={deck} /> : `Don't like this Deck? Edit it !`}
                            <hr />
                        </div>
                    )
                })}
                <DeckForm
                    deck={this.state.deck}
                    createNewDeck={this.createNewDeck}
                />
                <h1>Populate Grocery List!</h1>
                <button onClick={this.populateGroceryList}>Populate</button>
                
            </UserWrapper>
        );
    }
}

export default UserPage;