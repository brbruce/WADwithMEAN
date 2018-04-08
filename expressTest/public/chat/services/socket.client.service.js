angular.module('chat').service('Socket', ['Authentication', '$location', '$timeout',
  function(Authentication, $location, $timeout) {
    if (Authentication.user) {
      // This is creating the socket with no uri, resulting in hocalhost:80.  It should take the url of the actual site
      // localhost:81.
      this.socket = io();
      //this.socket = io("http://localhost:81")
    } else {
      $location.path('/');
    }

    this.on = function(eventName, callback) {
      if (this.socket) {
        this.socket.on(eventName, function(data) {
          $timeout(function() {
            callback(data);
          });
        });
      }
    };

    this.emit = function(eventName, data) {
      if (this.socket) {
        this.socket.emit(eventName, data);
      }
    };

    this.removeListener = function(eventName) {
      if (this.socket) {
        this.socket.removeListener(eventName);
      }
    };
  }
]);
