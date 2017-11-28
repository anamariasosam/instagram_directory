module.exports = app => {
  var category = require("../controllers/categoryController");

  app
    .route("/categories")
    .get(category.list_all_categories)
    .post(category.create_a_category);
};
