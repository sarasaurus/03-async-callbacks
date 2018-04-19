
'use strict';

const fs = require('fs');
const reader = require('./lib/reader');
// const logger = require('./lib/logger');

const aPath = `${__dirname}/data/a.txt`;
const bPath = `${__dirname}/data/b.txt`;
const cPath = `${__dirname}/data/c.txt`;

const fileArray = [aPath, bPath, cPath];

const printText = (text) => {
  console.log('text', text);
  console.log('--------------------------------------------');
};

const readFileArrayAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  console.log('current file path', currentFilePath);

  try {
    return reader.readFile(currentFilePath, (file) => {
      console.log('passed in file', file);
      printText(file);
      readFileArrayAsync(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    console.log('error in main!');
  }
  return undefined;
};

readFileArrayAsync(fileArray, 0, () => console.log('we done'));

