const winston = require("winston");
const config = require("config");
const cron = require("node-cron");
const path = require("path");
const csvData = require("../services/csvDataService");
const csv = require("../services/csvService");
const emails = require("../services/emailService");
const file = require("../services/fileService");
const html = require("../html-template/html");

module.exports = () => {
  cron.schedule("45 16 * * *", async () => {
    const pathName = path.join(__dirname, "..", "/csv", "/report.csv");
    const {
      data,
      transactions,
      successfulTransactions,
      volumeOfTransactions,
      headers,
    } = await csvData.generate();

    const htmlTemplate = html.create(
      transactions,
      successfulTransactions,
      volumeOfTransactions
    );

    winston.info(await csv.create(headers, data, pathName));

    const info = await emails.send(
      config.get("admins_email"),
      pathName,
      "daily-transaction-report.csv",
      "Daily Transaction Report",
      "Daily Transaction Report",
      htmlTemplate
    );
    winston.info(info);
    winston.info(await file.remove(pathName));
  });
};
