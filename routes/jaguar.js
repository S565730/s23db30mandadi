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
router.get('/detail', jaguar_controlers.jaguar_view_one_Page);
router.get('/create', jaguar_controlers.jaguar_create_Page);
router.get('/update', jaguar_controlers.jaguar_update_Page);
router.get('/delete', jaguar_controlers.jaguar_delete_Page);

module.exports = router;