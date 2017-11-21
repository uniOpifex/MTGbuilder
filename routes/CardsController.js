var express = require("express");
var router = express.Router({ mergeParams: true });
const mtg = require("mtgsdk");

var Card = require("../models/cardModel.js");
var User = require("../models/userModel.js");
var Deck = require("../models/deckModel.js");


//Card Index Route
router.get("/", function(req, res) {
	User.findById(req.params.userId)
		.exec(function(err, user) {
			res.render("cards/index", {
				menuOne: "Decks",
				menuTwo: "Cards",
				menuOnehref: `/${req.params.userId}/decks`,
				menuTwohref: `/${req.params.userId}/cards`
			});
		});
});