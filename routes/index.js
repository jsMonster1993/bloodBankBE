var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/register', function(req, res, next) {
  res.json({"status":true});
});

module.exports = router;
