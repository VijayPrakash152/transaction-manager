const fs = require("fs");

const remove = (pathName) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        fs.unlink(pathName, (err) => {
          if (err) {
            throw new Error(err.message);
          }
          resolve("File deleted successfully!");
        });
      }, 60 * 1000);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports.remove = remove;
