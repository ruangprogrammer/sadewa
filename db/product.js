const knex = require('./knex'); // the connection!

module.exports = {

  getAll() {
    //return knex('_customer');
    return knex.select('product_id','product_name','product_price_min_range','product_price_max_range','product_create_date').from('_product');
  }//,
 /* getOne(id) {
    return knex('sticker').where('id', id).first();
  },
  create(sticker) {
    return knex('sticker').insert(sticker, '*');
  },
  update(id, sticker) {
    return knex('sticker').where('id', id).update(sticker, '*');
  },
  delete(id) {
    return knex('sticker').where('id', id).del();
  }*/

}
