/*
exports.render = function(req, res) {
  if (req.session.lastVisit) {
    console.log("lastvisit: ", req.session.lastVisit);
  }

  req.session.lastVisit = new Date();

  console.log("req.user.firstName: ", req.user ? req.user.firstName : "Missing user");

  res.render('index', {
    title: 'Hello World',
    //userFullName: req.user ? req.user.fullName : ''
    userFullName: req.user ? req.user.firstName + ' ' + req.user.lastName : ''
  });
};
*/

// Angular service 
exports.render = function(req, res) {
  if (req.session.lastVisit) {
    console.log("lastvisit: ", req.session.lastVisit);
  }

  req.session.lastVisit = new Date();

  console.log("req.user.firstName: ", req.user ? req.user.firstName : "Missing user");

  res.render('index', {
    title: 'Hello World',
    user: JSON.stringify(req.user)
  });
};