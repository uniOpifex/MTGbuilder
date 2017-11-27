const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var CardSchema = new Schema({
	name: {
		type: String,
		required: true
	},
  manaCost: String,
  power: String,
  colors: Array,
  cmc: Number,
  type: String,
  colorIdentity: Array,
  types: String,
  rarity: String,
  set: String,
  setName: String,
  text: String,
  artist: String,
  number: String,
  layout: String,
  imageUrl: String,
  reserved: String,
  id: String,
  toughness: String,
  Watermark: String
});

const DeckSchema = new Schema({
  name: { type: String, required: true },
  deckCards: [CardSchema]
});

const UserSchema = new Schema({
  userName: { type: String, required: true },
  password: String
})

// Create models for each schema
var CardModel = mongoose.model("Card", CardSchema);
var DeckModel = mongoose.model("Deck", DeckSchema);
// Export each model so they can be required elsewhere
module.exports = {
  Card: CardModel,
  Deck: DeckModel,
  User: UserModel
};
