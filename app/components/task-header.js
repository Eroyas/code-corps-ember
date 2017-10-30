import Component from '@ember/component';

/**
  The task-header component represents the header of a task. It is composed of
  the task title and number.

  ## default usage

  ```handlebars
  {{task-header task=task saveTitle="saveTaskTitleAction"}}
  ```

  @class task-header
  @module Component
  @extends Ember.Component
 */
export default Component.extend({
  classNames: ['task-header']
});
