const path = require("path");
const winston = require("winston");
const cron = require("node-cron");
const express = require("express");
const config = require("config");
const app = express();
const csv = require("./services/csv");
const csvData = require("./services/csvData");
const emails = require("./services/emails");
const file = require("./services/file");
const html = require("./html-template/html");
require("./startup/cors")(app);
require("./startup/db")();
require("./startup/logging")();

cron.schedule("30 0 * * *", async () => {
  try {
    (async () => {
      const {
        data,
        transactions,
        successfulTransactions,
        volumeOfTransactions,
        headers,
      } = await csvData.generate();
      const pathName = path.join(__dirname, "/csv", "/report.csv");
      const htmlTemplate = html.create(
        transactions,
        successfulTransactions,
        volumeOfTransactions
      );
      await csv.create(headers, data, pathName);
      await emails.send(
        config.get("admins_email"),
        pathName,
        "daily-transaction-report.csv",
        "Daily Transaction Report",
        "Daily Transaction Report",
        htmlTemplate
      );
      setTimeout(async () => {
        console.log(await file.remove(pathName));
      }, 1 * 60 * 1000);
    })();
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || config.get("port");
app.listen(port, () => winston.info(`Listening on port ${port}...`));
