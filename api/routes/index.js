const categoryRoutes = require("./categoryRoutes");
const subcategoryRoutes = require("./subcategoryRoutes");

module.exports = app => {
  categoryRoutes(app);
  subcategoryRoutes(app);
};
