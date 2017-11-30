'use strict';

/*!
 * array-slice <https://github.com/jonschlinkert/array-slice>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

require('mocha');
var assert = require('assert');
var slice = require('./');

describe('array-slice:', function() {
  it('should return the specified range.', function() {
    var arr = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    assert.deepEqual(slice(arr, 3, 6), ['e', 'f', 'g']);
    assert.deepEqual(slice(arr, 1), ['b', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    assert.deepEqual(slice(arr, -1), ['j']);
  });

  it('should not mutate the array', function() {
    var arr = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    slice(arr, 3, 6);
    assert.deepEqual(arr, ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });
});
