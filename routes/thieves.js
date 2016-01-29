var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
function Thieves(){
  return knex('thieves');
}
require('dotenv').load();
/* GET home page. */
router.get('/', function(req, res, next) {
  Thieves().then(function(data){
    res.json(data);
  });
});

router.get('/:id', function(req, res, next){
  Thieves().where('id', req.params.id).then(function(data){
    res.json(data);
  });
});

router.post('/', function(req, res, next){
  Thieves().insert({
    name: req.body.name,
    image: req.body.image,
    explosives: req.body.explosives,
    safe_cracking: req.body.safe_cracking,
    marksmanship: req.body.marksmanship,
    stealth: req.body.stealth,
    charisma: req.body.charisma,
    driving: req.body.driving
  }, 'id').then(function(id){
    res.json(id);
  });
});

module.exports = router;
