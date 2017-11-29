var mongoose = require("mongoose");
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var BusinessSchema = new Schema({
  name: String,
  phone: String,
  instagram: String,
  subcategory: { type: ObjectId, ref: "Subcategory", required: true }
});

BusinessSchema.virtual("url").get(function() {
  return "/business/" + this._id;
});

module.exports = mongoose.model("Business", BusinessSchema);
