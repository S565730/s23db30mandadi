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

// for a specificjaguar.
exports.jaguar_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await jaguar.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle jaguar update form on PUT.
exports.jaguar_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await jaguar.findById( req.params.id)
    // Do updates of properties
    if(req.body.jaguar_color)
    toUpdate.jaguar_color = req.body.jaguar_color;
    if(req.body.jaguar_breed) toUpdate.cost = req.body.jaguar_breed;
    if(req.body.jaguar_price) toUpdate.size = req.body.jaguar_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    // Handle jaguar delete on DELETE.
    exports.jaguar_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await jaguar.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.jaguar_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await jaguar.findById( req.query.id)
    res.render('jaguardetail',
    { title: 'jaguar Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a jaguar.
// No body, no in path parameter, no query.
// Does not need to be async
exports.jaguar_create_Page = function(req, res) {
console.log("create view")
try{
res.render('jaguarcreate', { title: 'jaguar Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for updating a jaguar.
// query provides the id
exports.jaguar_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await jaguar.findById(req.query.id)
res.render('jaguarupdate', { title: 'jaguar Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle a delete one view with id from query
exports.jaguar_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await jaguar.findById(req.query.id)
    res.render('jaguardelete', { title: 'jaguar Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    