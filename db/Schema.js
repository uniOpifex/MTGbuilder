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

var DeckSchema = new Schema({
  name: { type: String, required: true },
  deckCards: [CardSchema]
});

const UserSchema = mongoose.Schema({
	userName: {
			type: String,
			required: true
	},
	password: {
			type: String,
	},
	deck: [CardSchema],
	cardCollection: [CardSchema]
})

// Create models for each schema
var CardModel = mongoose.model("Card", CardSchema);
var DeckModel = mongoose.model("Deck", DeckSchema);
var UserModel = mongoose.model("User", UserSchema);
// var CardCollectionModel = mongoose.model("CardCollection", CardCollectionSchema);
// Export each model so they can be required elsewhere
module.exports = {
  CardModel: CardModel,
	DeckModel: DeckModel,
	
};
