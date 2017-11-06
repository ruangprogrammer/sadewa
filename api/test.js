

//CONTROLLER

router.put('/update_token/:id', (req,res, next) => {   //oke

 // res.json('test udpaet token');
  //console.log('Time: %d', Date.now());

/*   var Xmas95 = new Date('December 25, 1995 23:15:30');
   var d = Xmas95.getDate();
// var d = Date.now();
   res.json(d);
*/

  //var data = "2018-08-1e2"; 
  //var token = crypto.createHash('md5').update(data).digest('hex');
/*  var username = req.body.username;
  var password = req.body.password;*/
  var token = "lsdklskdsd";
  var token_expired = "2017-09-19 01-09-10";
   query_user.update(req.params.id,token,token_expired, req.body).then(user => {
      res.json("udpate berhasil");
    });

});


//MODEL

  update(id, token, token_expired) {
   return knex('_user').
              where('user_id', id).
                update({user_token:token,
                        user_token_expired:token_expired});
  }