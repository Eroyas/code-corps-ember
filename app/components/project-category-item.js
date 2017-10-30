import Component from '@ember/component';
import { notEmpty, alias } from '@ember/object/computed';
import { get, computed } from '@ember/object';
import { inject as service } from '@ember/service';

/**
  `project-category-item` represents a category with a project. When selected
  the user is taken to a list of projects using this category.

  ## Default usage
  ```Handlebars
    {{project-category-item category=category}}
  ```

  @class project-category-item
  @module Component
  @extends Ember.Component
 */
export default Component.extend({
  classNames: ['project-category-item'],
  tagName: ['li'],

  /**
   * Returns the class name for the icon.
   *
   * @property iconClass
   * @type String
   */
  iconClass: computed('category.slug', 'selected', function() {
    let slug = get(this, 'category.slug');
    if (get(this, 'selected')) {
      return `category-item__icon--small--${slug}--selected`;
    } else {
      return `category-item__icon--small--${slug}`;
    }
  }),

  /**
    Returns true if 'userCategory' is not empty

    @property selected
    @type Boolean
   */
  selected: notEmpty('userCategory'),

  /**
    A service that returns all userCategories.

    @property userCategories
    @type Ember.Service
   */
  userCategories: service(),

  /**
    The current user.

    @property user
    @type DS.Model
   */
  user: alias('currentUser.user'),

  /**
    Categories that the user belongs to.

    @property usersUserCategories
    @type Ember.Array
   */
  usersUserCategories: alias('user.userCategories'),

  /**
    Returns the category if it exists in the user's categories.

    @property userCategory
    @type Ember.Object
   */
  userCategory: computed('category', 'userCategories.userCategories.isFulfilled', function() {
    let category = this.get('category');
    let userCategories = this.get('userCategories');
    return userCategories.findUserCategory(category);
  })
});
