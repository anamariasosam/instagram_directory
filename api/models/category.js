var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String
});

CategorySchema.virtual("url").get(function() {
  return "/category/" + this._id;
});

module.exports = mongoose.model("Category", CategorySchema);
