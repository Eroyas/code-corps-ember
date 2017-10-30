import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';
import { set, getProperties, get } from '@ember/object';

export default Mixin.create({
  currentUser: service(),
  onboarding: service(),

  user: alias('currentUser.user'),

  actions: {
    continue() {
      let { onboarding, user } = getProperties(this, 'onboarding', 'user');
      let { nextStateTransition, shouldTransitionUser } = getProperties(onboarding, 'nextStateTransition', 'shouldTransitionUser');

      // We can transition routes without transitioning the user's state
      if (shouldTransitionUser) {
        set(user, 'stateTransition', nextStateTransition);
      }

      this._transitionToNextRoute();
    },

    skip() {
      let { onboarding, user } = getProperties(this, 'onboarding', 'user');
      let { skipStateTransition, shouldTransitionUser } = getProperties(onboarding, 'skipStateTransition', 'shouldTransitionUser');

      // We can transition routes without transitioning the user's state
      if (shouldTransitionUser) {
        set(user, 'stateTransition', skipStateTransition);
      }

      this._transitionToNextRoute();
    }
  },

  _transitionToNextRoute() {
    let { onboarding, user } = getProperties(this, 'onboarding', 'user');
    user.save().then(() => {
      this.transitionToRoute(get(onboarding, 'nextRoute'));
    });
  }
});
