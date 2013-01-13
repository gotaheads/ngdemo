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


function BlankCtrl() {
	$scope.pageMessage = 'Welcome!!!???'
}
BlankCtrl.$inject = [];


function BootstrapCtrl($scope) {
 $scope.color = 'blue'

}
BootstrapCtrl.$inject = ['$scope'];



function NgAPICtrl($scope) {
 $scope.color = 'blue'

 $scope.hitEnter =  function() {
 	console.log('hit enter on div')

 }
}
NgAPICtrl.$inject = ['$scope'];



function EditJobCtrl($scope, $http, $routeParams) {
    $scope.title = 'Edit job';
    $scope.jobId = $routeParams.jobId;
    console.log("EditJobCtrl " + $scope.jobId);
    
    $http.get('/restlet/jobs/' + $scope.jobId).success(function(job) {
        $scope.job = job;
    });    

    $scope.save = function() {
        $http.put('/restlet/jobs/-1', $scope.job)
        .success(function(data, status) {
            console.log('job saved d:' + data + ' s:' + status);
            $scope.status = status;
            $scope.data = data;
            $scope.result = data; // Show result from server in our <pre></pre> element
        })
        .error(function(data, status) {
            $scope.data = data || "Request failed";
            $scope.status = status;        
        });
    };    
}

EditJobCtrl.$inject = ['$scope','$http', '$routeParams'];


function ViewContractCtrl($scope, $http, $routeParams) {
    $scope.title = 'Edit job';
    $scope.jobId = $routeParams.jobId;
    console.log("ViewContractCtrl " + $scope.jobId);
    
    $http.get('/restlet/jobs/' + $scope.jobId).success(function(job) {
        $scope.job = job;
    });    

}

ViewContractCtrl.$inject = ['$scope','$http', '$routeParams'];
