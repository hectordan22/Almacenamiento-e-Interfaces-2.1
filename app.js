var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// RUTAS

// requiero el archivo de las rutas 

var equipos_rutas = require('./routes/equipos.router');
var trabajos_rutas = require('./routes/trabajos.router');
var users_rutas = require('./routes/usuarios.router')

// Requiero que se lea el archivo de la base de datos 
require('./db/db')

// Aca lo coloco las ruta para que pueda ser utilizada cuando corra la aplicacion 



app.use('/api', equipos_rutas);
app.use('/api', trabajos_rutas);
app.use('/api/users',users_rutas)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 next(createError);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;

