'use strict';

/* Controllers */


function MyCtrl1($scope, bdetect) {
}

MyCtrl1.$inject = ['$scope', 'bdetect'];


function TemplateCtrl($scope) {

  $scope.templates =
    [ { name: 'partial1.html', url: 'partials/partial1.html'},
      { name: 'partial2.html', url: 'partials/partial2.html'},
      { name: 'partial3.html', url: 'partials/partial3.html'}];

  $scope.template = $scope.templates[0];	
}

TemplateCtrl.$inject = ['$scope'];


function ValCtrl($scope) {
	
	$scope.master= {};
 
	  $scope.update = function(user) {
	    $scope.master= angular.copy(user);
	  };
 
	  $scope.reset = function() {
	    $scope.user = angular.copy($scope.master);
	  };
 
  $scope.reset();
}

ValCtrl.$inject = ['$scope'];

function RestCtrl($scope, Phone, myFoo) {
	console.log('query start')
	$scope.phones = Phone.query();
	console.log('query finished')

	$scope.get = function() {
		console.log('myFoo start')
		myFoo.get()
		console.log('myFoo finished')
		
	}

}

RestCtrl.$inject = ['$scope', 'Phone','myFoo'];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

ValCtrl