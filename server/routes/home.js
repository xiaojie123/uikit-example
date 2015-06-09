var express = require('express');
var api = require('../api');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('home');
});

module.exports = router;
