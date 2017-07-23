module.exports = {
  // Development configuration options
  sessionSecret: 'developmentSessionSecret',
  // Database
  db: 'mongodb://localhost/mean-book',
  // FB login
  facebook: {
    clientID: '1833392170311738',
    clientSecret: '63658dc7b536a8ca57687b07666a8496',
    callbackURL: 'http://localhost:81/oauth/facebook/callback'
  },
  google: {
    clientID: '979781646736-ajrr0vbha6t1mio2u6ip8hhb60vh3tl9.apps.googleusercontent.com',
    clientSecret: 'vemzDwVqhgdSIbM1HE1UOIE6',
    callbackURL: 'http://localhost:81/oauth/google/callback'
  }
};