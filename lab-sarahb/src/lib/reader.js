'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.readFile = (file, callback) => {
  console.log("reading: ", file);
  return fs.readFile(file, (err, data) => {
    if (err) {
      console.log('reader problem');
    }
    console.log("data", data);
    console.log("file", file);
    return callback(data.toString('utf8', 0));
    
  });
};

