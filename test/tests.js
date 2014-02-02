module('.addClass');
test('it adds a class to the element', function() {
  var elem = document.getElementById('foo');
  Apollo.addClass(elem, 'test');
  ok(elem.classList.contains('test'));
});

module('.hasClass');
test('it detects the class', function() {
  var elem = document.getElementById('bar');
  ok(Apollo.hasClass(elem, 'test'));
});
