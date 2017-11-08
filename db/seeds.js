require("dotenv").config();
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
// mongoose.Promise = global.Promise
const db = mongoose.connection;
db.on("error", function(err) {
  console.log(err);
});
db.once("open", async function() {
  console.log("Connected to MongoDB!");
  // Pull in Models from the `schema.js`
  var Schema = require("./schema.js");
  var CollectionModel = Schema.CollectionModel;
  var CardModel = Schema.CardModel;
  var UserModel = Schema.UserModel

  //Delete all decks from the database
  // CollectionModel.remove({}, function(err) {
  //   console.log(err);
  // });

  // Create some decks and cards
  const card1 = new CardModel({ api_id: 386616, quantity: 1 });
  const card2 = new CardModel({ api_id: 386616, quantity: 1 });
  const card3 = new CardModel({ api_id: 386616, quantity: 1 });

  const cards = [card1, card2, card3];

  const deck1 = new CollectionModel({
    name: "Deck1"
  });

  const deck2 = new CollectionModel({
    name: "Deck2"
  });

  // Here we assign some cards to each deck.
  const decks = [deck1, deck2];
 
  const test = new UserModel({
    username: 'Steve',
    cardCollection: []
  })

  await CollectionModel.remove()
  await CardModel.remove()
  await UserModel.remove()
  await decks.forEach(deck => {
    deck.cards = cards;
    console.log(deck);
    deck.save()
  });
  await test.cardCollection.push(deck1);
  await test.save( () => {
    
  })
  // } catch(error) {}
  
  // }
  db.close();
});

