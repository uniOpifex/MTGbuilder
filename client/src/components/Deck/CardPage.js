
import React, { Component } from 'react';
import axios from 'axios'
import{ Link } from 'react-router-dom'

class CardPage extends Component {
    state = {
        card: {
       
        }
    }
    async componentWillMount(){
        const { userId, deckId, cardId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/deck/${deckId}/card/${cardId}`)
        this.setState({item: res.data})
    }

    render() {
        return (
            <div>   
                <h1>{this.state.deck.deckName}</h1>

                <p>If everything looks good lets head back!</p>
                <Link to={`/user/${this.props.match.params.userId}/deck/${this.props.match.params.deckId}`}>Back</Link>
            </div>
        );
    }
}

export default CardPage;