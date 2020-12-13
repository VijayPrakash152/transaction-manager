const fs = require("fs");

const remove = (pathName) => {
  return new Promise((resolve, reject) => {
    try {
      fs.unlink(pathName, (err) => {
        if (err) {
          throw new Error(err.message);
        }
        resolve("File deleted successfully");
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports.remove = remove;
