const winston = require("winston");
const path = require("path");

module.exports = function () {
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({
      filename: path.join(__dirname, "..", "/logs", "uncaughtExceptions.log"),
    })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });

  winston.add(
    new winston.transports.File({
      filename: path.join(__dirname, "..", "/logs", "logfile.log"),
      handleExceptions: false,
    })
  );

  winston.add(
    new winston.transports.Console({
      colorize: true,
      prettyPrint: true,
      handleExceptions: true,
    })
  );
};
