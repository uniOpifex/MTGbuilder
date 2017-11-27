var express = require("express");
var router = express.Router();
const app = express();
const axios = require("axios")

var {CardModel} = require("../db/schema");



//Card Index Routes

router.param('name', function (req, res, next, name) {
  console.log('CALLED ONLY ONCE');
  next();
});


router.get('/', async (req, res) => { 
	console.log("working")
	let params = req.query
	let cardToSearch = params.name
	console.log(params )
	if  ((Object.keys(params).length == 0 )) {
		try {
			const cards = await CardModel.find()
			res.json(cards)
			} catch (err) {
				res.send(err)
			}
	} else if (params.hasOwnProperty("name")) {
				console.log("working  name search");
				try {
					const cards = await CardModel.find({'name': { $regex : cardToSearch, $options:'i' }});
					console.log(params)
					console.log(typeof cards)
					console.log(cards)
					res.send(cards);
					} catch (err) {
						console.log("broke")
					}
	} else {
		console.log("broke")
	} 
	
	
})


// router.get('/name/:name', async (req, res) => {
	
// 		// try to get the user details from the User model and attach it to the request object
// 		console.log("working search");
// 		try {
// 			const cards = await CardModel.find(req.params.name);
// 			res.send(cards);
// 			} catch (err) {
// 				res.send(err)
// 			}
// 	});

// router.get('/:name', async (req, res) => { 
// 	console.log("working search")
// 	try {
// 		const cards = await CardModel.findById(req.params.name)
// 		res.send(cards)
// 		} catch (err) {
// 			res.send(err)
// 		}
	
// })


module.exports = router;
