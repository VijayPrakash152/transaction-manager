const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const create = async (headers, data, pathName) => {
  return new Promise((resolve, reject) => {
    try {
      const header = headers.map((header) => ({
        id: header,
        title: header.toUpperCase(),
      }));
      const csvWriter = createCsvWriter({
        path: pathName,
        header: header,
      });
      csvWriter
        .writeRecords(data)
        .then(() => console.log("The CSV file was written successfully"))
        .catch((err) => {
          throw new Error(err.message);
        });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

module.exports.create = create;
