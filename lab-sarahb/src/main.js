
'use strict';

const reader = require('./lib/reader');
// const logger = require('./lib/logger');

const aPath = `${__dirname}/data/a.txt`;
const bPath = `${__dirname}/data/b.txt`;
const cPath = `${__dirname}/data/c.txt`;

const files = [aPath, bPath, cPath];

const printText = (text) => {
  console.log(text);  
  console.log('++++++++++++++++++++++++++++++++++++++++++');
};

const returnFileAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];

  try {
    return reader.readFile(currentFilePath, (file) => {
      printText(file);
      returnFileAsync(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    console.log('error in main!');
  }
  return undefined;
};

returnFileAsync(files, 0, () => console.log('no more files'));

