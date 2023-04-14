var zipper = require('../models/zipper');
// List of all zippers
exports.zipper_list = async function(req, res) {
    try{
    thezipper = await zipper.find();
    res.send(thezipper);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// for a specific zipper.
exports.zipper_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await zipper.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle Zipper create on POST.
exports.zipper_create_post = async function(req, res) {
    console.log(req.body)
    let document = new zipper();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"zipper_type":"goat", "cost":12, "size":"large"}
    document.zipper_type = req.body.zipper_type;
    document.zipper_name = req.body.zipper_name;
    document.zipper_cost = req.body.zipper_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle zipper delete form on DELETE.
exports.zipper_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Zipper delete DELETE ' + req.params.id);
};
// Handle zipper update form on PUT.
exports.zipper_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await zipper.findById( req.params.id)
 // Do updates of properties
 if(req.body.zipper_type)
 toUpdate.zipper_type = req.body.zipper_type;
 if(req.body.zipper_name) toUpdate.zipper_name = req.body.zipper_name;
 if(req.body.zipper_cost) toUpdate.zipper_cost = req.body.zipper_cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
// VIEWS
// Handle a show all view

exports.zipper_view_all_Page = async function(req, res) {
    try{
    thezipper = await zipper.find();
    res.render('Zipper', { title: 'Zipper Search Results', results: thezipper });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}

