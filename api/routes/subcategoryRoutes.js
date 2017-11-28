module.exports = app => {
  var subcategory = require("../controllers/subcategoryController");

  app
    .route("/subcategories")
    .get(subcategory.list_all_subcategories)
    .post(subcategory.create_a_subcategory);
};
