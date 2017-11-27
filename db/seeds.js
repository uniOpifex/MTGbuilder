require("dotenv").config();
var axios = require('axios')
var mongoose = require("mongoose");
var assert = require('assert');
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
// mongoose.Promise = global.Promise
const db = mongoose.connection;
db.on("error", function(err) {
  console.log(err);
});
db.once("open", async function() {
  console.log("Connected to MongoDB!");

  // Pull in Models from the `schema.js`
    var Schema = require("./Schema.js");
    var Card = Schema.Card;
    var DeckModel = Schema.Deck;
    getCard = async (input) => {
      const inputArr = [input]
      const data = await axios.get("https://api.magicthegathering.io/v1/cards", {
        params: {
          name: input
        }
      })
      const thisCard = data.data.cards[0]
      return thisCard
    };
    const cardCollection = ["Plains","Forest","Swamp","Mountain","Archangel Avacyn"]
    
    const data = [{"name":"Black Lotus","manaCost":"{0}","cmc":0,"type":"Artifact","types":["Artifact"],"rarity":"Special","set":"VMA","setName":"Vintage Masters","text":"{T}, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.","artist":"Chris Rahn","number":"4","layout":"normal","multiverseid":382866,"imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382866&type=card","reserved":true,"printings":["LEA","LEB","2ED","CED","CEI","VMA"],"originalText":"{T}, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.","originalType":"Artifact","legalities":[{"format":"Commander","legality":"Banned"},{"format":"Legacy","legality":"Banned"},{"format":"Vintage","legality":"Restricted"}],"id":"6ad6463d56da447ab490a1a2b2b8a18759befc5f"},{"name":"Black Lotus","manaCost":"{0}","cmc":0,"type":"Artifact","types":["Artifact"],"rarity":"Rare","set":"CEI","setName":"International Collector's Edition","text":"{T}, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.","artist":"Christopher Rush","layout":"normal","reserved":true,"printings":["LEA","LEB","2ED","CED","CEI","VMA"],"legalities":[{"format":"Commander","legality":"Banned"},{"format":"Legacy","legality":"Banned"},{"format":"Vintage","legality":"Restricted"}],"source":"SQUARE EDGES AND GOLD-BORDERED BACKSIDE, NOT TOURNAMENT LEGAL","id":"0177907f961f83fd0a1d56df3a8da8da5fb1d091"},{"name":"Black Lotus","manaCost":"{0}","cmc":0,"type":"Artifact","types":["Artifact"],"rarity":"Rare","set":"CED","setName":"Collector's Edition","text":"{T}, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.","artist":"Christopher Rush","layout":"normal","reserved":true,"printings":["LEA","LEB","2ED","CED","CEI","VMA"],"legalities":[{"format":"Commander","legality":"Banned"},{"format":"Legacy","legality":"Banned"},{"format":"Vintage","legality":"Restricted"}],"source":"SQUARE EDGES AND GOLD-BORDERED BACKSIDE, NOT TOURNAMENT LEGAL","id":"4909cbbde3d6e2a064163d87880c78fee85acc29"},{"name":"Black Lotus","manaCost":"{0}","cmc":0,"type":"Artifact","types":["Artifact"],"rarity":"Rare","set":"LEB","setName":"Limited Edition Beta","text":"{T}, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.","artist":"Christopher Rush","layout":"normal","multiverseid":298,"imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=298&type=card","reserved":true,"printings":["LEA","LEB","2ED","CED","CEI","VMA"],"originalText":"Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.","originalType":"Mono Artifact","legalities":[{"format":"Commander","legality":"Banned"},{"format":"Legacy","legality":"Banned"},{"format":"Vintage","legality":"Restricted"}],"id":"d275e5eba129ef575f1e7ff354a664a254dae296"},{"name":"Black Lotus","manaCost":"{0}","cmc":0,"type":"Artifact","types":["Artifact"],"rarity":"Rare","set":"LEA","setName":"Limited Edition Alpha","text":"{T}, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.","artist":"Christopher Rush","layout":"normal","multiverseid":3,"imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3&type=card","reserved":true,"printings":["LEA","LEB","2ED","CED","CEI","VMA"],"originalText":"Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.","originalType":"Mono Artifact","legalities":[{"format":"Commander","legality":"Banned"},{"format":"Legacy","legality":"Banned"},{"format":"Vintage","legality":"Restricted"}],"id":"c944c7dc960c4832604973844edee2a1fdc82d98"},{"name":"Black Lotus","manaCost":"{0}","cmc":0,"type":"Artifact","types":["Artifact"],"rarity":"Rare","set":"2ED","setName":"Unlimited Edition","text":"{T}, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.","artist":"Christopher Rush","layout":"normal","multiverseid":600,"imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card","reserved":true,"printings":["LEA","LEB","2ED","CED","CEI","VMA"],"originalText":"Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.","originalType":"Mono Artifact","legalities":[{"format":"Commander","legality":"Banned"},{"format":"Legacy","legality":"Banned"},{"format":"Vintage","legality":"Restricted"}],"id":"f0ef319325797d1e6597aa72050e4febda02df9b"}]
    const data1 = [data[0]]
    const test = await getCard("Black Lotus")
    const test2 = [test]
    // console.log(data1)
    // console.log(test2)

    cardCollection.map( async (index) => {
      blah = await getCard(index)
      const cardForInsert = [blah]
      console.log(cardForInsert)
      Card.collection.insertMany(cardForInsert, function(err,r) {
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);
        
      });
    })
   
    
  
});
