const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/db")();
require("./startup/cronJob")();
require("./startup/prod");

const port = process.env.PORT || config.get("port");
app.listen(port, () => winston.info(`Listening on port ${port}...`));
