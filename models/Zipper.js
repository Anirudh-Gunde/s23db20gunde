const mongoose = require("mongoose")
const Zipper = mongoose.Schema({
zipper_type: String,
zipper_name: String,
zipper_cost: Number
})
module.exports = mongoose.model("Zipper",Zipper)

// We can seed the collection if needed on server start


