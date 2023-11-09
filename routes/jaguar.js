var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jaguar', { title: 'Search Results jaguar' });
});
var express = require('express');
const jaguar_controlers= require('../controllers/jaguar');
var router = express.Router();
/* GET jaguars */
router.get('/', jaguar_controlers.jaguar_view_all_Page );
module.exports = router;