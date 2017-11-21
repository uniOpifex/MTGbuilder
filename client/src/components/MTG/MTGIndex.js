import React, { Component } from "react";
import axios from "axios";
const mtg = require("mtgsdk");

class MTGIndex extends Component {
  state = {
    card: {},
    value: ''
  };

  componentWillMount() {
    this.getCard();
  }

  handleChange = (event) => {
    const newState = {...this.state };
    newState[event.target.value] = event.target.value;
    this.setState(newState);
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.updateCard();
  }
 

  getCard = async () => {
    const data = await axios.get("https://api.magicthegathering.io/v1/cards", {
      params: {
        name: "Archangel Avacyn"
      }
    })
    const thisCard = data.data.cards[0]
    await this.setState({
      card: thisCard
    });
  };
  updateCard = async () => {
    const data = await axios.get("https://api.magicthegathering.io/v1/cards", {
      params: {
        name: this.state.value
      }
    })
    const thisCard = data.data.cards[0]
    await this.setState({
      card: thisCard
    });
  };


  

  render() {
    const thisCard = this.state.card;
    const cardImg = thisCard.imageUrl;
    return (
      <div>
        <h1>{thisCard.name}</h1>
        <img src={cardImg} alt="" />
        <form onSubmit={this.handleSubmit}>
          <label >
            Card: 
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    );
  }
}

export default MTGIndex;
