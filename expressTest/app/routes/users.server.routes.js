// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
  passport = require('passport');

  //-------------------------------------
  // Local login strategy routes

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'signup' routes 
	app.route('/signup')
	   .get(users.renderSignup)
	   .post(users.signup);

	// Set up the 'signin' routes 
	app.route('/signin')
	   .get(users.renderSignin)
	   .post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
       failureFlash: true
     }));

  //-------------------------------------
  // FB login strategy routes

  // Set up the Facebook OAuth routes 
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

  // Set up the Google OAuth routes 
  app.get('/oauth/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
    failureRedirect: '/signin'
  }));

  app.get('/oauth/google/callback', passport.authenticate('google', {
    failureRedirect: '/signin',
    successRedirect: '/'
  }));

  // Set up the 'signout' route
  app.get('/signout', users.signout);


  //-------------------------------------
  // This code below worked ok before adding Angular 
/*
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
*/
};
