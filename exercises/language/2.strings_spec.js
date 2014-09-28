var assert = require("assert");

describe('Working with Strings', function() {

  // Change the expresion after the comma to fullfill the expectation
  // The `assert.equals` expresion makes the test pass if and only if both
  // expresions are equal.
  // General form:
  // assert.equal(<expression>, <expressionExpectation>);

  it('create a string without using variable declaration', function() {
    assert.equal('Jhon Doe', '');
  });

  it('create a string using a variable declaration', function() {
    var name;

    assert.equal('Jhon Doe', name);
  });

  it('concatenate two strings using plus operator', function() {
    var name    = 'HAL';
    var version = '9000';
    var model;

    assert.equal('HAL9000', model);
  });

  it('concatenate two strings using plus operator', function() {
    var firstName = 'Jhon';
    var lastName  = 'Doe';
    var fullName;

    assert.equal('Jhon Doe', fullName);
  });

  it('concatenate a string with a number', function() {
    var numberOfWeekDays = 7;
    var weekIntro        = 'A week have';
    var weekOutro        = 'days';
    var sentence;

    assert.equal('A week have 7 days', sentence);
  })

  it('calculate the number of characters of a string', function() {
    var name   = 'Jhon Doe';
    var length;

    assert.equal(8, length);
  })

  it('transform a string into a number', function() {
    var number = '325';

    assert.strictEqual(325, number);
  });
})
