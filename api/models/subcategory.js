var mongoose = require("mongoose");
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var SubcategorySchema = new Schema({
  name: String,
  category: { type: ObjectId, ref: "Category", required: true }
});

SubcategorySchema.virtual("url").get(function() {
  return "/subcategory/" + this._id;
});

module.exports = mongoose.model("Subcategory", SubcategorySchema);
