const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//const flash = require('express-flash-2');
//const session = require('express-session');
const crypto = require('crypto');
const validator = require('express-validator');
//const hash = crypto.createHash('sha256');
const app = express();
const customer = require('./api/customer');
const user = require('./api/user');
const product = require('./api/product');
const modul = require('./api/modul');

/*/////////////
const multer  = require('multer')
const upload = multer()*/
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(validator());

/*
app.use(session({secret:'sadewainternasional'}));
app.use(flash());
*/

app.use('/customer', customer);
app.use('/user', user);
app.use('/product', product);
app.use('/modul', modul);


// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
*/


app.get('/', (req, res) => {
 // var data = "2018-08-1e2";//do shash'owania";
 // res.json(test);
  //return 
 // var a = crypto.createHash('md5').update(data).digest('hex');
  // res.json(a);
   res.json(['WELCOME API SADEWA INTERNASIONAL']);
   //return res.send({ error: true, message: 'hello snhdgfjsdfhs djfshdjfsd sjdfhsdf sjkdfhsjdf sjdfh' })
});

app.get('/test', function (req, res) {
    return res.send({ error: true, message: 'hello world' })
});
 

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
