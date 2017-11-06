const express = require('express');
const crypto = require('crypto');
const query_modul = require('../db/modul');
const Auth_mdw = require('../middlewares/auth');
const router = express.Router();
const secret = 'sadewainternasional';
var session_store;


/*
function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}*/

/*function validSticker(sticker) {
  const hasTitle = typeof sticker.title == 'string' && sticker.title.trim() != '';
  const hasURL = typeof sticker.url == 'string' && sticker.url.trim() != '';
  const hasDescription = typeof sticker.description == 'string' && sticker.description.trim() != '';
  const hasRating = !isNaN(sticker.rating);
  return hasTitle && hasDescription && hasURL && hasRating;
}*/


/*router.get('/login', function (req, res) {
    //return 'tetd';//\
    res.send({ error: true, message: 'Login Sadewa Internasional customer saller' })
});
*/

router.get('/oke',Auth_mdw.check_token,  function(req, res, next) {

   //res.send({ error: true, message: 'test login Users' })

});

router.get('/list', (req, res) => {
  query_modul.getAll().then(modul => {
    //res.json(customer);
    res.send({ status: true, message: 'List Product',data_modul: modul })

  });
});


router.get('/test', (req, res) => {

  var a = [];

  /*    const newProducts = [];
                let sum = 0;
                for (let i = 0, len = arr.length; i < len; i++) {
                    const innerObj = {};
                    //const prc   = 0
                    innerObj["mall_id"]     = arr[i].mall_id;
                    innerObj["mall_name"]   = arr[i].mall_name;
                    innerObj["shipping_id"] = arr[i].shipping_id;

                    newProducts.push(innerObj);
                    for (let y = 0, len = arr[i].product.length; y < len; y++) {
                        const productValue = Object.values(arr[i].product);
                        innerObj["product"] = productValue;
                        sum += arr[i].product[y].product_price
                    }
                }*/
    const numbers = [];

    query_modul.getModule()
      .then(item_show => {
        
        a = item_show

        return a

      })
      .then(res => {
        const xx = []
        for (let i=0; i < res.length; i++) {
          const c = {}
          c['module_id']  = res[i].module_id;

            xx.push(c);
        console.log(xx)

          // query_modul.getModuleId(res[i].module_id)
          //   .then(xxx => {
              
          //     //const c = {}
          //     //c['children'] = xxx
          //     //console.log("TANDA", xxx)
              
          //   });
        //console.log(xx)
        }

      })

    // query_modul.getModule().then(item_show => {        


    // for( i = 0 ; i < item_show.length ; i++ ){
    //   a[i] = i*2
    //  query_modul.getModuleId(0).then(item_show_ => {

    //   for (x = 0; x < item_show_; x++) {
    //     numbers[x] = x*2
    //   }

      
    //   // res.json(item_show_);
    //   //innerObj ={}
    //   //innerObj['module_name'] = 'asdasd';
    //   //console.log("asds")
    //   //numbers.push(innerObj)

    //  })
    // }


      // vehicle_type.forEach(function(vehicle, index, arr) {
      //    Jsonresult[vehicle] = true;
      // })
      // for (var i = item_show.length - 1; i >= 0; i--) {
      //   const innerObj = {};
      //     // innerObj["module_id"]     = item_show[i].module_id;
      //     // innerObj["module_name"]   = item_show[i].module_name;
      //     // innerObj["module_icon"] = item_show[i].module_icon;
          
      //     query_modul.getModuleId(item_show[i].module_id).then(children => { 
      //       res.json(children);
      //     //     for (var x = children.length - 1; x >= 0; x--) {
      //     //       innerObj["module_id"]     = children[x].module_id;
      //     // innerObj["module_name"]   = children[x].module_name;
      //     // innerObj["module_icon"] = children[x].module_icon;
      //     //       //const productValue = children[i].module_name    ;
      //     //       //res.json(productValue);
      //     //       //innerObj['children'] = children[i].module_name;
      //     // newModule.push(innerObj);
      //     //     }
      //     })
      //   //item_show[i]; 

      // }



/*
        a = item_show.map((x,i)=>{
          return {
            module_id:x.module_id,
            name: x.module_name,
            icon:x.module_name,
            url:x.module_link,
          //  children: ['1','3','4','6'],
         //   icon:x.module_icon

          }
        })*/

        

    // });

 });



/*
router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(sticker => {
    if(sticker) {
      res.json(sticker);
    } else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if(validSticker(req.body)) {
    queries.create(req.body).then(stickers => {
      res.json(stickers[0]);
    });
  } else {
    next(new Error('Invalid sticker'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validSticker(req.body)) {
    queries.update(req.params.id, req.body).then(stickers => {
      res.json(stickers[0]);
    });
  } else {
    next(new Error('Invalid sticker'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});
*/
module.exports = router;
