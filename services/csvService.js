const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const create = (headers, data, pathName) => {
  return new Promise(async (resolve, reject) => {
    const header = headers.map((header) => ({
      id: header,
      title: header.toUpperCase(),
    }));
    const csvWriter = createCsvWriter({
      path: pathName,
      header: header,
    });
    await csvWriter.writeRecords(data);
    resolve("Csv file created successfully!");
  });
};

module.exports.create = create;
