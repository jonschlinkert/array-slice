/*!
 * array-slice <https://github.com/jonschlinkert/array-slice>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var arraySlice = require('../');

describe('array-slice:', function () {
  it('should return the specified range.', function () {
    var arr = ['a','b','d','e','f','g','h','i','j'];
    expect(arraySlice(arr, 3,6)).to.eql(['e', 'f', 'g']);
  });
});