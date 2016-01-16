# quantize-value

Quantize a number

[![Travis build status](http://img.shields.io/travis/jmeas/quantize-value.svg?style=flat)](https://travis-ci.org/jmeas/quantize-value)
[![Code Climate](https://codeclimate.com/github/jmeas/quantize-value/badges/gpa.svg)](https://codeclimate.com/github/jmeas/quantize-value)
[![Test Coverage](https://codeclimate.com/github/jmeas/quantize-value/badges/coverage.svg)](https://codeclimate.com/github/jmeas/quantize-value)
[![Dependency Status](https://david-dm.org/jmeas/quantize-value.svg)](https://david-dm.org/jmeas/quantize-value)
[![devDependency Status](https://david-dm.org/jmeas/quantize-value/dev-status.svg)](https://david-dm.org/jmeas/quantize-value#info=devDependencies)

### About

Quantization is an operation that takes some number and constrains it to a discrete
set of numbers.

For instance, quantizing the value of 3 to the even numbers could yield either
2 or 4. If the value of 4 is desired, then this library calls that a "covering" algorithm.
If the value of 2 is desired, then that is called a "fitting" algorithm.

This library provides a utility to quantize numbers using both types of algorithms.

### Uses

Two use cases for quantization are varied, and include:

1. Drag-to-resize user interfaces
2. Infinite scroll algorithms

#### Caveats

This library is generally unsuitable for quantum physics applications, as it
requires that the discrete set of numbers have even spacing between them.

### Installation

The easiest way to install this library is through npm.

```sh
npm install quantize-value
```

Then, import or require it into your library.

```js
// ES2015 syntax
import quantizeValue from 'quantize-value';

// CJS syntax
var quantizeValue = require('quantize-value');
```

This library exports UMD, so it works in the most popular JavaScript module
environments, including ES2015, CommonJS, AMD, and also browser globals.

### Usage

##### `quantizeValue( val, quantum [, options] )`

- `val`: The number to be quantized
- `quantum`: The gap between the discrete set numbers
- `options`: There's currently only one option, `cover`, which accepts a Boolean
  value. This determines whether the algorithm is covering or fitting (see below).

### Covering vs. Fitting

The idea of covering vs. fitting is important to this library. Consider quantizing
the value of 78 to a quantum of 25. There are two choices: 75 or 100. If you want
the larger of the two choices, 100, then you want `cover: true`. Otherwise,
you want `cover: false`.

The same works for the negative numbers, too. If we have -78 and we're quantizing it
against 25 (or -25), then `cover: true` would return -100, whereas `cover: false` would
return -50.
