var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

require('../models/Property');
var Property = mongoose.model('Property');

/* GET all properties listing. */

//find with query '?'
router.get('/', function (req, res, next) {

  Property.find(req.query, (err, r) => {
    res.send(r);
  })
});

//get one property by id

router.get('/:_id', function (req, res, next) {
  console.log(req.params);
  Property.findOne(req.params, (err, r) => {
    res.send(r);
  });
});

//delete
router.delete('/:_id', function (req, res, next) {
  Property.findByIdAndRemove(req.params._id, function (err, data) {
    if (!err) {
      console.log("Deleted");
      res.send();
    }
  });
});

//create

router.post('/', function (req, res, next) {
  console.log(typeof(req.body));
  const newObj = new Property(req.body);
  newObj.save(err=>{
  if (err) return res.status(500).send(err);
  return res.status(200).send(newObj);
  });
 
});

//update
router.put('/:_id', function (req, res, next) {
  //console.log(req.params._id);
  Property.findByIdAndUpdate(req.params._id, req.body, {new: true},(err, todo) => {
    if (err) return res.status(500).send(err);
    return res.send(todo);
});
});

module.exports = router;