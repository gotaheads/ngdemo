'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myModule = angular.module('myApp.services', []).
  value('version', '0.1');

myModule.factory('simpleService', function() {
  var shinyNewServiceInstance = function() {
  	return 'i am simpleService'
  };

  return shinyNewServiceInstance;
});

myModule.factory('bdetect', function() {
  return BrowserDetect;
});

  
