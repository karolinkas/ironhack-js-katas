var dom;

function createTestNode() {
  var div = document.createElement('div');

  div.id = 'tests';
  dom = div;
  document.body.appendChild(dom);
}

function destroyTestNode() {
  document.body.removeChild(dom);
}

function useFixture(name) {
  var template = JST[name]();
  dom.innerHTML = (template);
}

beforeEach(function() {
  createTestNode();
})

afterEach(function() {
  destroyTestNode()
})
