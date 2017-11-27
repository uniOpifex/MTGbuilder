const express = require('express')
const router = express.Router({ mergeParams: true })
const { User, Card, Deck } = require('../db/Schema')



router.post('/', async (req, res) => {
  try {
    const newDeck = req.body.deck
    const user = await User.findById(req.params.userId)
    user.deck.push(newDeck)
    const saved = await user.save()
    res.json(saved)
  } catch (err) {
    res.json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    const deck = user.deck.id(req.params.id)
    res.json(deck)
  } catch (err) {
    res.send(err)
  }
})

router.patch('/:id', async (req, res) => {

  const updatedDeck = req.body.deck
  const user = await User.findById(req.params.userId)
  const deck = user.deck.id(req.params.id)

  deck.deckName = updatedDeck.deckName
  const saved = await user.save()
  res.json(saved)
})

router.delete('/:id', async (req, res) => {

  const user = await User.findById(req.params.userId)
  user.deck.id(req.params.id).remove()

  const saved = await user.save()
  res.json(saved)
})

module.exports = router