var express = require('express');
var router = express.Router();
var sqlWrapper = require('../database/sqlWrapper');






/* GET home page. */
router.post('/register', function(req, res, next) {
  console.log("inside register route",req.body);
  var name = req.body.name;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var bloodGroup = req.body.bloodGroup;
  var address = req.body.address;
  var lastdonated = req.body.lastdonated;

  var query = "insert into records (name, email, mobile, bloodgroup, address, last_donated) values ('"+ name +"','"+ email +"','"+ mobile +"','"+ bloodGroup +"','"+ address +"','"+ lastdonated +"')";
  console.log(query);

  sqlWrapper.executeQuery([query]).then((result)=>{
    console.log("res is ",result);
      res.json({"status":true});
  }).catch((error)=>{
      console.log(error);
      res.json({"status":false,"error":error});
  });

});


router.post('/getAllUsers', function(req, res, next) {
    console.log("inside getAllUsers route",req.body);

    var query = "select * from records";
    console.log(query);

    sqlWrapper.executeQuery([query]).then((result)=>{
        console.log("res is ",result);
        res.json({"status":true, "result":result[0]});
    }).catch((error)=>{
        console.log(error);
        res.json({"status":false,"error":error});
    });

});


module.exports = router;
