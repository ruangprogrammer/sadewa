const knex = require('./knex'); // the connection!

module.exports = {

/*  get_check() {

  }*/

  getAll() {
   // return knex('_user');
    return knex.select('user_id',
                        'user_level_id',
                        'user_name',
                        'user_email',
                        'user_username',
                        'user_is_login',
                        'user_status',
                        'user_photo').from('_user');
  },  

  login(email,password,user) {
    return knex('_user').where({user_email:email,user_password:password});
  },



/*  create(name, email) {
    return knex('_user').insert({
      user_name: nama,
      user_email: email
    }, '*');
  },
*/


  login_check(username,password,user){
     return knex('_user').where({user_username:username,user_password:password});
  },


  check_token(token){
    return knex('_user').
              where('user_token',token);
  },

  update_token(id,token,token_expired){
    return knex('_user').
              where('user_id', id).
                update({user_token:token,
                        user_token_expired:token_expired});
  },


  /*var data = "2018-08-12";//do shash'owania";
  var a = crypto.createHash('md5').update(data).digest('hex');
  res.json(a);*/
   //return knex.select('user_photo').from('_user').where('user_id', id).first();
  //,
  getOne(id) {

    return knex.select(knex.raw('*,CONCAT("http://sadewa.cyberumkm.com/uploads/images/user/",user_photo) as user_photo')).from('_user').where('user_id', id).first();

  },

/*
    return knex.select('user_name','user_photo').
              from('_user').where('user_id', id).//then(rows=>rows);
                then(rows =>rows.map(row => rows));*/

  create(user_level_id,user_name,user_email,user_username,user_password,user_status,user_photo,user_token,user) {
    return knex('_user').
              insert({user_level_id : user_level_id,
                      user_name : user_name, 
                      user_email : user_email,
                      user_username : user_username, 
                      user_password : user_password, 
                      user_status : user_status, 
                      user_photo : user_photo,
                      user_token:user_token});
  }, 
  
  update(id, token, token_expired) {
   return knex('_user').
              where('user_id', id).
                update({user_token:token,
                        user_token_expired:token_expired});
  }

  /*,
  delete(id) {
    return knex('sticker').where('id', id).del();
  }*/

}
