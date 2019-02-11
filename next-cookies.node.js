/**
 * Module dependencies
 */

const parser = require('cookie');

/**
 * Export `Cookies`
 */

module.exports = Cookies;

/**
 * Cookies function
 */

function Cookies (ctx, options) {
  if (!ctx.req.headers) return {}; // for Static export feature of Next.js
  const cookies = ctx.req.headers.cookie;
  if (!cookies) return {};
  return parser.parse(cookies, options)
}
