describe('Working with Events', function() {

  // All this test use the template in exercises/dom/template/list

  it('register a handler', function() {
    // Make the handleClick function execute when the element with id first is clicked
    // in the element with id 'first'
    useFixture('list');
    var handleClick = function(evt) {};
    handleClick = sinon.spy(handleClick);

    // Add event handler
    var first = document.getElementById('first');

    first.click();
    assert.equal(handleClick.called, true)
  })

  it('deregister a handler', function() {
    // Make the handleClick function execute when the element with id first is clicked
    // in the element with id 'first' and then remove it
    useFixture('list');
    var handleClick = function(evt) {};
    handleClick = sinon.spy(handleClick);

    // Add event handler
    var first = document.getElementById('first');

    first.click();
    assert.equal(handleClick.called, true);

    // Remove handler

    first.click();
    assert.equal(handleClick.calledOnce, true);
  })

  it('delegate', function() {
    // Make the handleClick function execute when any of the "li" elements is
    useFixture('list');
    var first  = document.getElementById('first');

    var handleClick = function(evt) {
      // delegate
    };
    handleClick = sinon.spy(handleClick);

    // Add event handler


    first.click();
    assert.equal(handleClick.called, true);
  })
})
