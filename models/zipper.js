const mongoose = require("mongoose")
const zipper = mongoose.Schema({
zipper_type: String,
zipper_name: String,
zipper_cost: Number
})
module.exports = mongoose.model("zipper",zipper)

// We can seed the collection if needed on server start


