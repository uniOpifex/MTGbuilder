import React, { Component } from "react";
import axios from "axios";

class LocalCardIndex extends Component {
  state = {
    card: '',
    value: ''
  };
  componentWillMount() {
    this.getCard();
  }
  handleChange = (event) => {
    event.preventDefault;
    this.setState({ value: event.target.value });
  }

  handleSubmit= (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.updateCard();
  }
  getCard = async () => {
    const data = await axios.get("api/cards/", {
      params: {
        name: "Plains"
      }
      })
    
    const thisCard = data.data[0]
    await this.setState({
      card: thisCard
    });
  };
  updateCard = async () => {
    const cardToGet = this.state.value
    let urlGet = cardToGet.replace
    let data = await axios.get(`api/cards/`, {
      params: {
        name: this.state.value
      }
      })
      let myString = JSON.stringify(data.data)
      console.log(myString)
      console.log(data.data.length == 0)
      
    if (data.data.length == 0) {
      const newData = await axios.get("https://api.magicthegathering.io/v1/cards", {
        params: {
          name: this.state.value
        }
      })
      const thisCard = newData.data.cards[0]
      await this.setState({
         card: thisCard
      });
    } else {
    const thisCard = data.data[0]
    await this.setState({
      card: thisCard
    })
  };
  };

  render() {
    const thisCard = this.state.card;
    const cardImg = thisCard.imageUrl;
    return (
      <div>
        <h1>{thisCard.name}</h1>
        <img src={cardImg} alt="" />
        <p>{thisCard.text}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LocalCardIndex;
