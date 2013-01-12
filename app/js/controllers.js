'use strict';

/* Controllers */


function MyCtrl1($scope) {
}

MyCtrl1.$inject = ['$scope'];

function TemplateCtrl($scope) {

  $scope.templates =
    [ { name: 'partial1.html', url: 'partials/partial1.html'},
      { name: 'partial2.html', url: 'partials/partial2.html'},
      { name: 'partial3.html', url: 'partials/partial3.html'}];

  $scope.template = $scope.templates[0];	
}

TemplateCtrl.$inject = ['$scope'];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
