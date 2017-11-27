import React, { Component } from 'react';
import styled from 'styled-components'


const ButtonEditAdd = styled.button`
background-color: black;
color: white;
border-radius: 10px;
`
class DeckForm extends Component {
    state = {
        newDeck: {
            deckName: '',
        }
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const newDeck = { ...this.state.newDeck }
        newDeck[attribute] = event.target.value
        console.log("Cha cha change!")
        this.setState({ newDeck })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.createNewDeck(this.state.newDeck)
        const emptyForm = {
            deckName: '',
            
        }
        this.setState({ newDeck: emptyForm })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="deckName">Pantry Name</label>
                        <input onChange={this.handleChange} type="text" name="deckName" value={this.state.newDeck.deckName} />
                    </div>
                    <ButtonEditAdd type="submit">Add A Deck</ButtonEditAdd>
                </form>
            </div>
        );
    }
}

export default DeckForm;