const knex = require('./knex'); // the connection!

module.exports = {
  getAll() {
    return knex('article');
  },
  getOne(id) {
    return knex('article').where('id', id).first();
  },
  create(sticker) {
    return knex('article').insert(sticker, '*');
  },
  update(id, sticker) {
    return knex('article').where('id', id).update(sticker, '*');
  },
  delete(id) {
    return knex('article').where('id', id).del();
  }
}
