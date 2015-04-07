/*!
 * array-slice <https://github.com/jonschlinkert/array-slice>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

require('should');
var slice = require('./');

describe('array-slice:', function () {
  it('should return the specified range.', function () {
    var arr = ['a','b','d','e','f','g','h','i','j'];
   slice(arr, 3, 6).should.eql(['e', 'f', 'g']);
   slice(arr, 1).should.eql(['b','d','e','f','g','h','i','j']);
   slice(arr, -1).should.eql(['j']);
  });
});
