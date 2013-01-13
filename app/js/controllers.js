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

//https://github.com/valums/file-uploader#summary
//test with ie
//http://code.google.com/p/ie7-js/
function UploadCtrl($scope) {
	
	$scope.master= {};

	function createUploader() {
		var fileCount = 0;
		var fileLimit = 1;

		var uploader = new qq.FineUploader({
		  // Pass the HTML element here
		  element: document.getElementById('fine-uploader'),
		  multiple: false,
		  validation: {
		      allowedExtensions: ['jpeg', 'jpg', 'gif', 'png'],
		      sizeLimit: 51200000 //51200 // 50 kB = 50 * 1024 bytes
		  },         
		  request: {
		    endpoint: 'server/handleUploads'
		  },
		  callbacks: {
		    onSubmit: function(id, fileName) {

		//              fileCount ++;
		//              if(fileCount > fileLimit) {
		//                $('#filelimit-fine-uploader .qq-upload-button').hide();
		//                $('#filelimit-fine-uploader .qq-upload-drop-area').hide();
		//                return false;
		//              }

		    },
		    onCancel: function(id, fileName) {
		//              fileCount --;
		//              if(fileCount <= fileLimit) {
		//                $('#filelimit-fine-uploader .qq-upload-button').show();
		//              }
		    },
		    onComplete: function(id, fileName, responseJSON) {

		      //if (responseJSON.success) {
		      //    $('#filelimit-fine-uploader .qq-upload-button').hide();
		      //    $('#filelimit-fine-uploader .qq-upload-drop-area').hide();
		      //  }
		      //}
		    }
		  },
		      });
	}

	new createUploader();
	
}

UploadCtrl.$inject = ['$scope'];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

ValCtrl