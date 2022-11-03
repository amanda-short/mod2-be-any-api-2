const { Router } = require('express');
const Team = require('../models/team.js');
// const { university } = require('../models/team.js');


module.exports = Router()

  .get('/', async (req, res) => {
    const university = await Team.getAll();
    const filtered = university.map(({ id, school }) => ({ id, school }));
    res.json(filtered);
  });
