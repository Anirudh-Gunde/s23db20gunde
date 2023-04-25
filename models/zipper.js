const mongoose = require("mongoose")
const zipper = mongoose.Schema({
zipper_type: {type: String, minlength:1, maxlength:20},
zipper_name: {type: String, minlength:1, maxlength:15},
zipper_cost: {type: Number, min: 1, maxlength:1000}
})
module.exports = mongoose.model("zipper",zipper)

// We can seed the collection if needed on server start


