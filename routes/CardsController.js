var express = require("express");
var router = express.Router({ mergeParams: true });
const mtg = require("mtgsdk");

var Card = require("../models/cardModel.js");
var User = require("../models/userModel.js");
var Deck = require("../models/deckModel.js");