var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
function Banks(){
  return knex('banks');
}
require('dotenv').load();

/* GET home page. */
router.get('/', function(req, res, next) {
  Banks().then(function(data){
    res.json(data);
  });
});

router.get('/:id', function(req, res, next){
  Banks().where('id', req.params.id).then(function(data){
    res.json(data);
  });
});

module.exports = router;
