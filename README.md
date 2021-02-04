# nodejs-sample-dynamically-loading-json-data-source

Node.js sample of dynamically loading a json data source.

## Usage

I have not made it an npm package.
If you run it in the root directory, it will behave like this.

```javascript
const data = require('./main');

data();
/*
{
  data: [
    { id: '1', name: 'test1' },
    { id: '2', name: 'test2' },
    { id: '3', name: 'test3' }
  ]
}
*/

data('aaa');
/*
{
  data: [
    { id: '1', name: 'test1' },
    { id: '2', name: 'test2' },
    { id: '3', name: 'test3' }
  ]
}
*/

data('bbb');
/*
{
  data: [
    { id: '1', name: 'data1' },
    { id: '2', name: 'data2' },
    { id: '3', name: 'data3' }
  ]
}
*/

data('ccc');
// Uncaught Error: Selected data is invalid
```

## Commands

Test

```sh
yarn test
```

Code format

```sh
yarn fmt
```
