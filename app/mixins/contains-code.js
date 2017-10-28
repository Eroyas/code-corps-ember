import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

/**
 * `contains-code` provides a computed property to the extended class
 * that returns whether or not the `body` property contains `code`
 * tags.
 *
 * ## default usage
 *
 * ```
 * import ContainsCodeMixin from 'code-corps/mixins/contains-code';
 *
 * export default Model.extend(ContainsCodeMixin, { ... });
 * ```
 *
 * @mixin contains-code
 * @module Mixin
 */
export default Mixin.create({

  /**
   * returns whether or not the `body` property contains `code` tags
   *
   * @property containsCode
   * @type Boolean
   */
  containsCode: computed('body', function() {
    let body = this.get('body');
    if (body) {
      return body.indexOf('<code>') !== -1;
    }
    return false;
  })
});
