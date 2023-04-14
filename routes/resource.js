var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var zipper_controller = require('../controllers/zipper');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// zipper ROUTES ///
// POST request for creating a zipper.
router.post('/zipper', zipper_controller.zipper_create_post);
// DELETE request to delete zipper.
router.delete('/zipper/:id', zipper_controller.zipper_delete);
// PUT request to update zipper.
router.put('/zipper/:id', zipper_controller.zipper_update_put);
// GET request for one zipper.
router.get('/zipper/:id', zipper_controller.zipper_detail);
// GET request for list of all zipper items.
router.get('/zipper', zipper_controller.zipper_list);
module.exports = router;