'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
const mongoose = require('mongoose');
const configApp = require('./config');
var InitSegments = require('./api/initdb/document');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  mongoose.Promise = global.Promise;
  mongoose.connect(configApp.db.uri, { useNewUrlParser: true });
  const db = mongoose.connection;

  db.once('open', () => {
    InitSegments.initDefaultSegments();
  });

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});