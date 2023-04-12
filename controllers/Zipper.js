var zipper = require('../models/zipper');
// List of all Costumes
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
exports.zipper_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Zipper detail: ' + req.params.id);
};
// Handle Zipper create on POST.
exports.zipper_create_post = async function(req, res) {
    console.log(req.body)
    let document = new zipper();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
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
exports.zipper_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Zipper update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view

exports.zipper_view_all_Page = async function(req, res) {
    try{
    thezipper = await zipper.find();
    res.render('zipper', { title: 'Zipper Search Results', results: thezipper });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}

