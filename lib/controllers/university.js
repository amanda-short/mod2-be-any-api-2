const { Router } = require('express');
const team = require('../models/team.js');
const { university } = require('../uni-data.js');
// const { university } = require('../models/team.js');


module.exports = Router()

  .get('/', async (req, res) => {
    const university = await team.getAll();
    const filtered = university.map(({ id, school }) => ({ id, school }));
    res.json(filtered);
  });