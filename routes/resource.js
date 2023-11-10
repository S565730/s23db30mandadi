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
// Handle jaguar update form on PUT.
exports.jaguar_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await jaguar.findById( req.params.id)
// Do updates of properties
if(req.body.jaguar_type)
toUpdate.jaguar_type = req.body.jaguar_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};