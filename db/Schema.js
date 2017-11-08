const mongoose = require('mongoose');

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const  Collection = new Schema({
    name: {
        type: String,
        required: true
    },
    cards: [CardSchema]
})

const cardSchema = new Schema({
    api_id: {
      type: Number,
      required: true
    },
      quantity: {
        type: Number,
        required: true,
      }
})

// Create models for each schema
const CollectionModal = mongoose.model('Collection', CollectionSchema)
const CardModel = mongoose.model('card', CardSchema)

// Export each model so they can be required elsewhere
module.exports = {
    CollectionModel: CollectionModel,
    CardModel: CardModel,
}