'use strict';

/* Directives */


var myModule = angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

myModule.directive('useDirective', ['simpleService', function(simpleService) {
    return function(scope, elm, attrs) {
      elm.text(simpleService());
    };
  }])