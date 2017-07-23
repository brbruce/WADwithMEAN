// Angular app: application.js

var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute','users','example']);

// Configure URL schema - hashbang mode (older) vs HTML5 browser history mode.
// Using hashbang here.
mainApplicationModule.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

// Angular service - Facebook oauth hash bug fix
if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});
