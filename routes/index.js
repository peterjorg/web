'use strict';

var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var envVar = process.env.HELLOSERVICE_URL || '';

  if (envVar) {
    request(envVar + '/hello', function (err, resp, body) {
      var response = '';
      if (err) {
        response = err;
      } else {
        response = body;
      }

      res.render('index', { helloServiceEnv: envVar, serviceResponse: response });
    });
  }

  res.render('index', { helloServiceEnv: envVar, serviceResponse: '<URL not available>' });

});

module.exports = router;
