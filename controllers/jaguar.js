var jaguar = require('../models/jaguar');
// List of all jaguars
exports.jaguar_list = async function(req, res) {
    try{
    thejaguars = await jaguar.find();
    res.send(thejaguars);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific jaguar.
exports.jaguar_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: jaguar detail: ' + req.params.id);
};
// Handle jaguar create on POST.
exports.jaguar_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: jaguar create POST');
};
// Handle jaguar delete form on DELETE.
exports.jaguar_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: jaguar delete DELETE ' + req.params.id);
};
// Handle jaguar update form on PUT.
exports.jaguar_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: jaguar update PUT' + req.params.id);
};
exports.jaguar_view_all_Page = async function(req, res) {
    try{
    thejaguars = await jaguar.find();
    res.render('jaguar', { title: 'jaguar Search Results', results: thejaguars });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.jaguar_create_post = async function(req, res) {
    console.log(req.body)
    let document = new jaguar();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"jaguar_type":"goat", "cost":12, "size":"large"}
    document.jaguar_color = req.body.jaguar_color;
    document.jaguar_breed = req.body.jaguar_breed;
    document.jaguar_price = req.body.jaguar_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }
   
  
   