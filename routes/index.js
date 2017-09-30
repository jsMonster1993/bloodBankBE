var express = require('express');
var router = express.Router();
var sqlWrapper = require('../database/sqlWrapper');

/* GET home page. */
router.post('/register', function(req, res, next) {
  console.log("inside register route",req.body);
  sqlWrapper.executeQuery(["select * from records"]).then((result)=>{
    console.log("res is ",result)
  });
  res.json({"status":true});
});

module.exports = router;
