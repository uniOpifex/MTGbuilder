const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var CardSchema = new Schema({
	name: String,
	manaCost: String,
	cmc: Number,
	types: Array,
	imageUrl: String,
	quantity: Number
});

var DeckSchema = new Schema({
	name: { type: String, required: true },
	mainDeck: [CardSchema],
	format: { type: String, required: true }
});

var UserSchema = new Schema({
	userName: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true }
	cards: [CardSchema],
	decks: [DeckSchema]
});

// Create models for each schema
var CardModel = mongoose.model("Card", CardSchema);
var DeckModel = mongoose.model("Deck", DeckSchema);
var UserModel = mongoose.model("User", UserSchema);
// Export each model so they can be required elsewhere
module.exports = {
	CardModel: CardModel,
	DeckModel: DeckModel,
	UserModel: UserModel
};
