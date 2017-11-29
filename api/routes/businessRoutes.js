module.exports = app => {
  var business = require("../controllers/businessController");

  app
    .route("/business")
    .get(business.findAll)
    .post(business.create);

  app.route("/business/:businessId").get(business.findOne);
};
