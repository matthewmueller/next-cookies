/**
 * Module dependencies
 */

const parser = require('cookie')

/**
 * Export `Cookies`
 */

module.exports = Cookies

/**
 * Cookies function
 */

function Cookies (ctx, options) {
  options = options || {}
  if (ctx.req) {
    // server
    const cookies = ctx.req.headers && ctx.req.headers.cookie
    if (!cookies) return {}
    return parser.parse(cookies, options)
  } else {
    // browser
    return require('component-cookie')();
  }
}
