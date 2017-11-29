module.exports = app => {
  var category = require("../controllers/categoryController");

  app
    .route("/categories")
    .get(category.findAll)
    .post(category.create);

  app.route("/categories/:categoryId").get(category.findOne);
};
