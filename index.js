const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./api/models/category");
require("./api/models/subcategory");
require("./api/models/business");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./api/routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
