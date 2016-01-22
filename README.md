# express-routebuilder
Takes in a structured set of routes and transforms them into an express router

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

