var users = require('../../app/controllers/users.server.controller'),
  passport = require('passport');

  //-------------------------------------
  // Local login strategy routes

  module.exports = function(app) {
  app.route('/signup')
     .get(users.renderSignup)
     .post(users.signup);

  app.route('/signin')
     .get(users.renderSignin)
     .post(passport.authenticate('local', {
       successRedirect: '/',
       failureRedirect: '/signin',
       failureFlash: true
     }));

  app.get('/signout', users.signout);

  //-------------------------------------
  // FB login strategy routes

  app.get('/oauth/facebook', passport.authenticate('facebook', {
    failureRedirect: '/signin',
    // Need to request mail in scope on authenticate call
    scope: ['email']
  }));
  
  app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/signin',
    successRedirect: '/'
    // Don't need scope in the callback
    //scope: ['email']
  }));

  //-------------------------------------
  // Google login strategy routes

  app.get('/oauth/google', passport.authenticate('google', {
    failureRedirect: '/signin',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
  }));

  app.get('/oauth/google/callback', passport.authenticate('google', {
    failureRedirect: '/signin',
    successRedirect: '/'
  }));

  //-------------------------------------

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
