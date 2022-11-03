const pool = require('../utils/pool');
module.exports = class Team {
  
  constructor(row) {
    this.id = row.id;
    this.school = row.school;
    this.mascot = row.mascot;
    this.location = row.location;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from team');
    return rows.map((universityRow) => new Team(universityRow));

  }
};
