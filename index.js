/*!
 * array-slice <https://github.com/jonschlinkert/array-slice>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

/**
 * **Example**
 *
 * ```js
 * var slice = require('array-slice');
 * var arr = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
 *
 * slice(arr, 3, 6);
 * //=> ['e', 'f', 'g']
 * ```
 *
 * @param {Array} `array` The array to slice.
 * @param {number} `start=0` The start index.
 * @param {number} `end=array.length` The end index.
 * @returns {Array} Returns the slice of `array`.
 * @api public
 */

module.exports = function slice(arr, start, end) {
  var len = arr.length;
  var range = [];

  start = idx(arr, start);
  end = idx(arr, end, len);

  while (start < end) {
    range.push(arr[start++]);
  }
  return range;
};


function idx(arr, pos, end) {
  var len = arr.length;

  if (pos == null) {
    pos = end || 0;
  } else if (pos < 0) {
    pos = Math.max(len + pos, 0);
  } else {
    pos = Math.min(pos, len);
  }

  return pos;
}