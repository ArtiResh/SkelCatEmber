import { test } from 'qunit';
import moduleForAcceptance from 'catalog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | catalog main');

test('visiting /catalog', function(assert) {
  server.createList('model', 10);
  visit('/catalog');

  andThen(function() {
    assert.equal(find('li').length, 10);
  });

});
