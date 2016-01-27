/* Take in an array of routes structured thusly:
 *   {
 *     'routes': {
 *       '/': {
 *         'get': function (req, res) {
 *         },
 *         'post': function (req, res) {
 *         }
 *       }
 *       '/users' : {
 *         'get': function (req, res) {
 *         },
 *         'delete': function (req, res) {
 *         }
 *       }
 *     },
 *     'helpers': {
 *       // not needed for building routes, useful for unit-testing
 *     }
 *   }
 *
 * and construct an express router
 * Allows the methods routes to be easily unit-tested later
 * I've chosen to implement the basic 4, get, post, put, delete, for now.
 *   Feel free to expand if needed
 */
var express = require('express')
var router = express.Router()

function routebuilder (routes) {
  var endpoints = Object.keys(routes.routes)
  for (var endpoint of endpoints) {
    var methods = Object.keys(routes[endpoint])
    for (var method of methods) {
      var cb = routes[endpoint][method]
      switch (method) {
        case 'all':
          router.all(endpoint, cb)
          break
        case 'get':
          router.get(endpoint, cb)
          break
        case 'post':
          router.post(endpoint, cb)
          break
        case 'put':
          router.put(endpoint, cb)
          break
        case 'delete':
          router.delete(endpoint, cb)
          break
        default:
          break
      }
    }
  }
  return router
}

exports = module.exports = routebuilder
