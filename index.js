
/**
 * Module dependencies.
 */

var classes = require('classes');

/**
 * Filter `el`'s children with the given `fn(el, i)`.
 *
 * @param {Element} el
 * @param {Function} fn
 * @api public
 */

module.exports = function(el, fn){
  for (var i = 0; i < el.children.length; ++i) {
    var child = el.children[i];
    if (fn(child, i)) {
      classes(child).remove('hide');
    } else {
      classes(child).add('hide');
    }
  }
};