var assert = require("assert");

describe('Working with Strings', function() {

  it('create a string without a variable declaration', function() {
    assert.equal('', 'Jhon Doe');
  });

  it('create a string with a variable declaration', function() {

    assert.equal('', 'Jhon Doe');
  });

  it('concatenate two strings using plus operator', function() {
    var firstName = 'Jhon';
    var lastName  = 'Doe';

    assert.equal('', 'Jhon Doe');
  });

  it('concatenate a string with a number', function() {
    var numberOfWeekDays = 7;
    var weekIntro = 'A week have';
    var weekOutro = 'days';

    assert.equal('', 'A week have 7 days');
  })

  it('calculate the number of characters of a string', function() {
    var name = 'Jhon Doe'

    assert.equal(name, 8);
  })

  it('transform a string into a number', function() {
    var number = '325';

    assert.equal(number, 325);
  });
})
