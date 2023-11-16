var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var jaguar_controller = require('../controllers/jaguar');
/// API ROUTE ///
// GET resources base.npm
router.get('/', api_controller.api);
/// jaguar ROUTES ///
// POST request for creating a jaguar.
router.post('/jaguars', jaguar_controller.jaguar_create_post);
// DELETE request to delete jaguar.
router.delete('/jaguars/:id', jaguar_controller.jaguar_delete);
// PUT request to update jaguar.
router.put('/jaguars/:id', jaguar_controller.jaguar_update_put);
// GET request for one jaguar.
router.get('/jaguars/:id', jaguar_controller.jaguar_detail);
// GET request for list of all jaguar items.
router.get('/jaguars', jaguar_controller.jaguar_list);
module.exports = router;