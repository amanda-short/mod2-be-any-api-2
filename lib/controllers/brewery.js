const { Router } = require('express');
const Beer = require('../models/beer.js');

module.exports = Router()

  .get('/', async (req, res) => {
    const brewery = await Beer.getAll();
    const filtered = brewery.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });


