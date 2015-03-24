# arrays-to-object

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Transform nested arrays into an object.

## Installation

```
npm install arrays-to-object
```

## Usage

``` javascript
var arraysToObject = require('arrays-to-object')

var arr = [
  ['foo', 'bar'],
  ['baz', 'qux'],
  [1, 'one'],
  [2, 'two']
]

arraysToObject(arr)
// {
//   foo: 'bar',
//   baz: 'qux',
//   1: 'one',
//   2: 'two'
// }
```

[npm-img]: https://img.shields.io/npm/v/arrays-to-object.svg?style=flat-square
[npm-url]: https://npmjs.org/package/arrays-to-object
[license-img]: http://img.shields.io/npm/l/arrays-to-object.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/arrays-to-object.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/arrays-to-object
