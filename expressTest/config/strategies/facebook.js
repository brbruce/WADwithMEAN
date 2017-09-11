// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var passport = require('passport'),
	url = require('url'),
	FacebookStrategy = require('passport-facebook').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users.server.controller');

// Create the Facebook strategy configuration method
module.exports = function() {
	// Use the Passport's Facebook strategy 
	passport.use(new FacebookStrategy({
			clientID: config.facebook.clientID,
			clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    passReqToCallback: true,
    // BBRUCE - Added this to allow email and other fields to be returned in profile.
    profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
    // Don't need this, but do need the profileFields list and the scope[email] param in the passport.authenticate call to get the email.
    //enableProof: true
  },
  function(req, accessToken, refreshToken, profile, done) {
			// Set the user's provider data and include tokens
    var providerData = profile._json;
    providerData.accessToken = accessToken;
    providerData.refreshToken = refreshToken;

    console.log("fb profile: ", profile);

   // Create the user OAuth profile
   var providerUserProfile = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      fullName: profile.displayName,
      // Getting error emails undefined.  Need to set profileFields['email'] and scope[email] in passport.authenticate call.
      email: profile.emails[0].value,
      username: profile.username,
      provider: 'facebook',
      providerId: profile.id,
      providerData: providerData
    };

			// Save the user OAuth profile
    users.saveOAuthUserProfile(req, providerUserProfile, done);
		}
	));
};