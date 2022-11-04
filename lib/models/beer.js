const pool = require('../utils/pool');
module.exports = class Beer {
  
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.rating = row.rating;
    this.location = row.location;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from beer');
    return rows.map((breweryRow) => new Beer(breweryRow));
  }

  // static async getById(id) {
  //   const { rows } = await pool.query(
  //     'SELECT * from beer WHERE id = $1',
  //     [id]
  //   );
  //   return new Beer(rows[0]);
  // }
};
