const fs = require('fs');
const path = require('path');

const DATA_DIR = 'data';
const DEFAULT_DATA = 'aaa';
const DEFAULT_DATA_FILE = path.join(
  __dirname,
  DATA_DIR,
  `${DEFAULT_DATA}.json`
);

const getDataFiles = () => fs.readdirSync(path.join(__dirname, DATA_DIR));

const getDatas = (dataFiles) => {
  return dataFiles.map((dataFileName) => path.basename(dataFileName, '.json'));
};

const getData = (dataName = DEFAULT_DATA) => {
  const dataFiles = getDataFiles();
  const datas = getDatas(dataFiles);

  if (!datas.includes(dataName)) {
    throw new Error('Selected data is invalid');
  }

  let data;
  if (datas.includes(dataName)) {
    data = require(path.join(__dirname, DATA_DIR, `${dataName}.json`));
  } else {
    data = require(DEFAULT_DATA_FILE);
  }

  return data;
};

module.exports = getData;
