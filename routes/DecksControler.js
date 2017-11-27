const express = require('express')
const router = express.Router({ mergeParams: true })
const { User, Deck } = require('../db/schema')



router.post('/', async (req, res) => {
  try {
    const newDeck = req.body.pantry
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
    res.json(pantry)
  } catch (err) {
    res.send(err)
  }
})

router.patch('/:id', async (req, res) => {

  const updatedDeck = req.body.deck
  const user = await User.findById(req.params.userId)
  const deck = user.deck.id(req.params.id)

  deck.Name = updatedDeck.Name

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