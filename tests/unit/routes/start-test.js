import { moduleFor, test } from 'ember-qunit';

moduleFor('route:start', 'Unit | Route | start', {
  // Specify the other units that are required for this test.
  needs: [
    'service:metrics',
    'service:router-scroll',
    'service:scheduler',
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
