// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
  sessionSecret: 'developmentSessionSecret',
  // Database
  db: 'mongodb://localhost/mean-book',
  facebook: {
    // Replace with actual values from LP
    clientID: '<FB_CLIENT_ID>',
    // Replace with actual values from LP
    clientSecret: '<FB_CLIENT_SECRET>',
    callbackURL: 'http://localhost:81/oauth/facebook/callback'
  },
  twitter: {
		clientID: 'Twitter Application ID',
		clientSecret: 'Twitter Application Secret',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
  google: {
    // Replace with actual values from LP
    clientID: '<GOOGLE_CLIENT_ID>',
    // Replace with actual values from LP
    clientSecret: '<GOOGLE_CLIENT_SECRET>',
    callbackURL: 'http://localhost:81/oauth/google/callback'
  }
};