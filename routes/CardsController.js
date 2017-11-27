var express = require("express");
var router = express.Router();
const app = express();
const axios = require("axios")

var {Card} = require("../db/schema");



//Card Index Routes


router.get('/', async (req, res) => { 
	
	let params = req.query
	let cardToSearch = params.name
	
	if  ((Object.keys(params).length == 0 )) {
		try {
			const cards = await Card.find()
			res.json(cards)
			} catch (err) {
				res.send(err)
			}
	} else if (params.hasOwnProperty("name")) {
				
				try {
					const cards = await Card.find({'name': { $regex : cardToSearch, $options:'i' }});
					
					
					
					res.send(cards);
					} catch (err) {
						
					}
	} else {
		
	} 
	
	
})

//Card Post Route

router.post('/', async (req, res) => {
  try {
		
		const newCard = new Card(req.body.card)
		console.log(newCard)
		const saved = await newCard.save()
		console.log(saved)
    res.json(saved)
  }catch(err){res.send(err)}
})


// router.get('/name/:name', async (req, res) => {
	
// 		// try to get the user details from the User model and attach it to the request object
// 		
// 		try {
// 			const cards = await CardModel.find(req.params.name);
// 			res.send(cards);
// 			} catch (err) {
// 				res.send(err)
// 			}
// 	});

// router.get('/:name', async (req, res) => { 
// 	
// 	try {
// 		const cards = await CardModel.findById(req.params.name)
// 		res.send(cards)
// 		} catch (err) {
// 			res.send(err)
// 		}
	
// })


module.exports = router;
