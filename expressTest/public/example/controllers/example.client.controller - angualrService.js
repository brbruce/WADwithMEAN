/*
angular.module('example').controller('ExampleController', ['$scope',
  function($scope) {
    $scope.name = 'MEAN Application';
  }
]);
*/

// Angular service
angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    $scope.name = Authentication.user ? Authentication.user.fullName : 'MEAN Application';
  }
]);

