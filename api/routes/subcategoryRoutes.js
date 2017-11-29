module.exports = app => {
  var subcategory = require("../controllers/subcategoryController");

  app
    .route("/subcategories")
    .get(subcategory.findAll)
    .post(subcategory.create);
};
