'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myAppService = angular.module('myApp.services', ['ngResource']).
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


myAppService.factory('myFoo',['$http',function($http) {
  var foo = {};
  foo.get = function() {
    console.log('get start')
    $http.get('phones/phones.json').
    success(function(response) {
      console.log('get success')
      return response.data;
    }).
    error(function(res) {
      console.log('get error' + rss)
      return 'error'
    });
  }
  return foo;
}]);
  
angular.module('phonecatServices', ['ngResource']).
    factory('Phone', function($resource){
  	    return $resource('phones/:phoneId.json', {}, {
                    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
});