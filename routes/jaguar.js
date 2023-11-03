var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jaguar', { title: 'Search Results jaguar' });
});
module.exports = router;