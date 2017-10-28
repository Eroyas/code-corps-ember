import { empty, alias } from '@ember/object/computed';
import { getProperties, get } from '@ember/object';
import Service, { inject as service } from '@ember/service';
import recordsList from 'code-corps-ember/utils/records-list';

export default Service.extend({
  currentUser: service(),
  store: service(),

  isEmpty: empty('userSkills'),
  user: alias('currentUser.user'),
  userSkills: alias('user.userSkills'),

  add(skill) {
    let { store, user } = getProperties(this, 'store', 'user');
    return store.createRecord('user-skill', { user, skill }).save();
  },

  includes(skill) {
    let userSkills = get(this, 'userSkills');
    return recordsList.includes(userSkills, skill);
  },

  find(skill) {
    let { userSkills, user } = getProperties(this, 'userSkills', 'user');
    return recordsList.find(userSkills, skill, user);
  },

  remove(skill) {
    let userSkill = this.find(skill);
    return userSkill.destroyRecord();
  },

  toggle(skill) {
    let userSkills = get(this, 'userSkills');
    if (recordsList.includes(userSkills, skill)) {
      return this.remove(skill);
    } else {
      return this.add(skill);
    }
  }
});
