/**
 * Module dependencies
 */

const parser = require('component-cookie');

/**
 * Export `Cookies`
 */

module.exports = Cookies;

/**
 * Cookies function
 */

function Cookies () {
  return parser();
}
