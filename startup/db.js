const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = async () => {
  const db = config.get("db");
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  winston.info(`Connected to ${db}...`);
};
