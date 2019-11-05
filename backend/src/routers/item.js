const express = require('express')
const router = new express.Router()
const Item = require('../models/item')

router.get('/items', async (req, res, next) => {
	try {
		const items = await Item.find()
		res.send(items)
	} catch (e) {
		res.status(500).send(e)
	}
})

router.post('/items', async (req, res, next) => {
	const item = new Item(req.body)
	try {
		await item.save()
		res.status(201).send(item)
	} catch (e) {
		res.status(400).send(e)
	}
})

module.exports = router
