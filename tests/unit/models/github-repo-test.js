import { moduleForModel, test } from 'ember-qunit';
import { testForBelongsTo } from '../../helpers/relationship';
import { testForAttributes } from 'code-corps-ember/tests/helpers/attributes';
import 'code-corps-ember/tests/helpers/has-attributes';

moduleForModel('github-repo', 'Unit | Model | github-repo', {
  // Specify the other units that are required for this test.
  needs: [
    'model:github-app-installation',
    'model:project'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

testForAttributes('github-repo', [
  'githubAccountAvatarUrl',
  'githubAccountId',
  'githubAccountLogin',
  'githubAccountType',
  'githubId',
  'insertedAt',
  'name',
  'syncState',
  'syncingCommentsCount',
  'syncingIssuesCount',
  'syncingPullRequestsCount',
  'triggeredSync',
  'updatedAt'
]);

testForBelongsTo('github-repo', 'githubAppInstallation');
testForBelongsTo('github-repo', 'project');
