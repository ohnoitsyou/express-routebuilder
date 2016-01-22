# express-routebuilder
Takes in a structured set of routes and transforms them into an express router

#### routes/index.js:

    {
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
    }

#### app.js:

    var routebuilder = require('routebuilder')
    var userRoutes = require('./routes/index')
    app.use('/', routebuilder(userRoutes))
