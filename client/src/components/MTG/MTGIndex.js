import React, { Component } from "react";
import axios from "axios";
const mtg = require("mtgsdk");

class MTGIndex extends Component {
  state = {
    card: {}
  };
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

  componentWillMount() {
    this.getCard();
  }

  render() {
    const thisCard = this.state.card;

    const cardImg = thisCard.imageUrl;
    return (
      <div>
        <h1>{thisCard.name}</h1>
        <img src={cardImg} alt="" />
        <form action="">
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default MTGIndex;
