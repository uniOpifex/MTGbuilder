const mongoose = require("mongoose");

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  api_id: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const CollectionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cards: [CardSchema],
  
});

const UserSchema = mongoose.Schema({
  username: {
     type: String,
     unique: true
  },
  cardCollection: []
})

// Create models for each schema
const CardModel = mongoose.model("Card", CardSchema);
const CollectionModel = mongoose.model("CardCollection", CollectionSchema);
const UserModel = mongoose.model("User", UserSchema)
// Export each model so they can be required elsewhere
module.exports = {
  CardModel: CardModel,
  CollectionModel: CollectionModel,
  UserModel: UserModel
};
