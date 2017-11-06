const knex = require('./knex'); // the connection!

module.exports = {

  getAll() {
    //return knex('_customer');
    var data = knex.select('module_id',
                          'module_name as name',
                          'module_icon as icon',
                          'module_link as url').from('_modules');
    return data;//knex.select('module_name as name').from('_modules');//.where('module_level',2);
    //return knex.('_modules');
  },


  getModule(){
    const innerObj = [];
    var data = knex.select('*').from('_modules').whereNot('module_level','3');

    // for (var i = data.length - 1; i >= 0; i--) {
    //   //const innerObj = {};
    //       innerObj["module_id"]     = data[i].module_id;
    //       innerObj["module_name"]   = data[i].module_name;
    //       innerObj["module_icon"] = data[i].module_icon;
    //       newModule.push(innerObj);
    // }
    //const innerObj = {};
    return data;
   /* knex.select('name').from('users').limit(10).map(function(row) {
      return row.name;
    })*/

   // var  items = 

   // return knex.select('*').from('_modules');//.map(function(row){
  },

  getModuleId(id){
    //return id;
     return knex.select('*').from('_modules').where('module_parent_id', id);//.first();
  }

  //,
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
