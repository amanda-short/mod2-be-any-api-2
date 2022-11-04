const { Router } = require('express');
const Beer = require('../models/beer.js');

module.exports = Router()

  .get('/:id', async (req, res) => {
    const brewery = await Beer.getById(req.params.id);
    res.json(brewery);
  })

  .get('/', async (req, res) => {
    const brewery = await Beer.getAll();
    const filtered = brewery.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });



