const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var CardSchema = new Schema({
	name: ""
});

var DeckSchema = new Schema({
	name: { type: String, required: true },
	deckCards: [CardSchema]
});



// Create models for each schema
var CardModel = mongoose.model("Card", CardSchema);
var DeckModel = mongoose.model("Deck", DeckSchema);
// Export each model so they can be required elsewhere
module.exports = {
	CardModel: CardModel,
	DeckModel: DeckModel,
};
