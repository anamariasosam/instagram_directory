const categoryRoutes = require("./categoryRoutes");
const subcategoryRoutes = require("./subcategoryRoutes");
const businessRoutes = require("./businessRoutes");

module.exports = app => {
  categoryRoutes(app);
  subcategoryRoutes(app);
  businessRoutes(app);
};
