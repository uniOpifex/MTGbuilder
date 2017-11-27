import React, { Component } from 'react';

class EditDeck extends Component {
    render() {
        const handleChange = (event) => {
            this.props.handleChange(event, this.props.deck._id)
        }
        const updateDeck = () => {
            this.props.updateDeck(this.props.deck._id)
        }
        return (
            <div>
                <label htmlFor="deckName">Deck Name: </label>
                <input onBlur={updateDeck} onChange={handleChange} name="deckName" value={this.props.deck.deckName} />
            </div>
        );
    }
}

export default EditDeck;