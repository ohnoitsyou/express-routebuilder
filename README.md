# express-routebuilder
Takes in a structured set of routes and transforms them into an express router

#### routes/index.js:

    {
      'routes': {
        '/': {
          'get': function (req, res, next) {
          }
          'post': function(req, res, next) {
          }
        },
        '/user': {
          'get': function (req, res, next) {
          }
        }
      },
      'helpers': {
        // functions that are used in routes that you might want to unit test
      }
    }

#### app.js:

    var routebuilder = require('routebuilder')
    var userRoutes = require('./routes/index')
    app.use('/', routebuilder(userRoutes))
