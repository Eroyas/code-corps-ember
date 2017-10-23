import { Factory, faker } from 'ember-cli-mirage';
import moment from 'moment';

export default Factory.extend({
  body() {
    return faker.lorem.paragraph();
  },
  createdAt(i) {
    return moment().subtract(i, 'days');
  },
  number(i) {
    return i + 1;
  },
  order() {
    return (this.position || 0) * 100;
  },
  position(i) {
    return i + 1;
  },
  status: 'open',
  title() {
    return faker.lorem.sentence();
  }
});
