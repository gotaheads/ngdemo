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


var INTEGER_REGEXP = /^\-?\d*$/;
myModule.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('integer', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('integer', false);
          return undefined;
        }
      });
    }
  };
});
 
var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
myModule.directive('smartFloat', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (FLOAT_REGEXP.test(viewValue)) {
          ctrl.$setValidity('float', true);
          return parseFloat(viewValue.replace(',', '.'));
        } else {
          ctrl.$setValidity('float', false);
          return undefined;
        }
      });
    }
  };
});

myModule.directive('contenteditable', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      // view -> model
      elm.bind('blur', function() {
        scope.$apply(function() {
          ctrl.$setViewValue(elm.html());
        });
      });
 
      // model -> view
      ctrl.$render = function() {
        elm.html(ctrl.$viewValue);
      };
 
      // load init value from DOM
      ctrl.$setViewValue(elm.html());
    }
  };
});