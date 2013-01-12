'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myAppService = angular.module('myApp.services', []).
  value('version', '0.1');

myAppService.factory('simpleService', function() {
  var shinyNewServiceInstance = function() {
  	return 'i am simpleService'
  };

  return shinyNewServiceInstance;
});

myAppService.factory('bdetect', function() {
  return BrowserDetect;
});

  
