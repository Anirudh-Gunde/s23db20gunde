var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var zipper_controller = require('../controllers/Zipper');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// zipper ROUTES ///
// POST request for creating a zipper.
router.post('/Zipper', zipper_controller.zipper_create_post);
// DELETE request to delete zipper.
router.delete('/Zipper/:id', zipper_controller.zipper_delete);
// PUT request to update zipper.
router.put('/Zipper/:id', zipper_controller.zipper_update_put);
// GET request for one zipper.
router.get('/Zipper/:id', zipper_controller.zipper_detail);
// GET request for list of all zipper items.
router.get('/Zipper', zipper_controller.zipper_list);
module.exports = router;