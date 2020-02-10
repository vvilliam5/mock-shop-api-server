var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//coonect to db
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://qdliexhuqfnckg:27d8e309d8ff2a41e095e49c2fa3344d1d3bb573f01c9456dd14f3aaa04bfe79@ec2-3-230-106-126.compute-1.amazonaws.com:5432/d2sjrhprsp18kv?ssl=true');
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection was established successfully')
  }
  catch (error) {
    console.error('Unable to connect to db: ', error.message);
  }
})();

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

  (async () => {
    try {
      await User.sync();
      console.log('Creates the table if it doesn\'t exist and do nothing if it already exists')
    } catch (error) {
      console.log('There was an error: ', error.message)
    }

  })();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
