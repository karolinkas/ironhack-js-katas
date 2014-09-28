var assert = require('chai').assert;

describe('Working with Arrays and Functions', function() {

  it('using map', function() {
    // Use map to sum two to each element
    var numbers = [1, 2, 3, 4];

    assert.deepEqual([3, 4, 5, 6], numbers);
  })

  it('using reduce', function() {
    // Use reduce to sum all numbers in the array
    // Note: you can use reduceRight if you want
    var numbers = [1, 2, 3, 4];
    var result;

    assert.equal(10, result);
  })

  it('using filter', function() {
    // Use filter to find the odd numbers in an array
    var numbers = [1, 2, 3, 4];
    var odds;

    assert.deepEqual([2, 4], odds);
  })

  it('using every', function() {
    // Use every to find if all numbers are even
    var numbers = [1, 3, 5, 7];
    var areEvens;

    assert.equal(areEvens, true);
  })

  it('using some', function() {
    // Use some to find if there is a odd number in the list
    var numbers = [1, 3, 5, 6];
    var haveOdds;

    assert.equal(haveOdds, true);
  })
})
