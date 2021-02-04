const path = require('path');
const getData = require('./main');

describe('sample-dynamically-loading-json-data-source', () => {
  describe('Minimum test', () => {
    test('Get default data', () => {
      const data = getData().data;
      const expectData = require(path.join(__dirname, 'data', 'aaa.json')).data;
      expect(data).toEqual(expectData);
    });

    test('Get aaa data', () => {
      const data = getData('aaa').data;
      const expectData = require(path.join(__dirname, 'data', 'aaa.json')).data;
      expect(data).toEqual(expectData);
    });

    test('Get bbb data', () => {
      const data = getData('bbb').data;
      const expectData = require(path.join(__dirname, 'data', 'bbb.json')).data;
      expect(data).toEqual(expectData);
    });

    test('When data that does not exist is specified', () => {
      expect(() => getData('ccc')).toThrow();
    });
  });
});
