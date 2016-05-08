// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;

module.exports ={
  index : function(req,res){
    var users = {};
    // findByAll
    res.send(users);
  },
  show : function(req,res){
    var user = {};
    // findById
    res.send(user);
  },
  create : function(req,res){
    var user = {};
    // insert
    res.send(user)
  },
  update : function(req,res){
    var user = {};
    // update
    res.send(user);
  },
  destroy : function(req,res){
    var user = {};
    // delete
    res.send(user);
  }
};
