export function getCardFromApi (name) {
  getCard = async () => {
    const data = await axios.get("https://api.magicthegathering.io/v1/cards", {
      params: {
        name: name
      }
    })
    const thisCard = data.data.cards[0]
    await this.setState({
      card: thisCard
    });
  };
}

// mtg.card.all({ name: cardToSeach, pageSize: 1 })
// .on("data", stuff => {
//   var promise = new Promise(function(resolve, reject) {
//     newCard = new Card({
//       name: stuff.name.toUpperCase(),
//       manaCost: stuff.manaCost,
//       cmc: stuff.cmc,
//       types: stuff.types,
//       imageUrl: stuff.imageUrl,
//       quantity: 0
//     });
//     if (check === null && newCard.imageUrl.length > 0) {
//       resolve();
//     }
//     else {
//       reject();
//     }
//   });
//   promise.then(function() {
//     User.findById(req.params.userId)
//     .exec(function(err, user) {
//       user.cards.push(newCard);
//       user.save();
//       newCard.save();
//       check = 1;
//       return res.redirect(`/${req.params.userId}/cards`);
//     });	
//   });
// });
// }