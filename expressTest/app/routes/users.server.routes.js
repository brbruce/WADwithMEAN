var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
  app.route('/users')
  	// if post, insert a new user
    .post(users.create)
    // If get, return a list
    .get(users.list);

  app.route('/users/:userId')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);  

  app.param('userId', users.userByID);

  // Custom static find method
  app.route('/usersByName/:username')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);  

  app.param('username', users.findOneByUsername);

};
