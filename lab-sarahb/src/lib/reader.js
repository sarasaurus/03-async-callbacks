'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.readFile = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.log('reader error');
    }
    return callback(data.toString('utf8', 0));
  });
};

