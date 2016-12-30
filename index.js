/**
 * Module dependencies
 */

const cookie = require('component-cookie')
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
    const cookies = ctx.req.headers.cookie
    if (!cookies) return {}
    return parser.parse(cookies, options)
  } else {
    // browser
    return cookie()
  }
}
