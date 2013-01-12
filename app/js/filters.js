'use strict';

/* Filters */

var myAppFilter = angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

myAppFilter.filter('money', function() {
  return function(data) {
    return accounting.formatMoney(data)
  };
});
