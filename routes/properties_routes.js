var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

require('../models/Property');
var Property = mongoose.model('Property');

/* GET users listing. */
router.get('/', function (req, res, next) {

  Property.find(req.query, (err, r) => {
    res.send(r);
  })
});

router.get('/:_id', function (req, res, next) {
console.log(req.params);
  Property.findOne(req.params, (err,r)=>{
    res.send(r);
  });
});

router.delete('/:_id', function (req, res, next) {
  
  Property.findByIdAndRemove(req.params._id, function(err,data)
{
    if(!err){
        console.log("Deleted");
        res.send();
    }
});
  
  });

module.exports = router;