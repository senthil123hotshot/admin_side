'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope,$http,$rootScope,$location) {
	

$scope.login=function(x,y){
	$scope.email=x;
	$scope.password=y;
	//console.log($scope.password);
	$scope.allData;
	$rootScope.allData=[];

		$scope.error="" ;
				if($scope.email == undefined)
					$scope.error="Please fill the email";
				else if ($scope.password == undefined || $scope.password.length < 3)
					$scope.error="Password must be 4 character";
				else{
					



	
	$http({

						method:'POST',
						url:'http://127.0.0.1:2000/vendor/login',
						data:{"email":$scope.email,"password":$scope.password}
			})
			            .then(function successCallback(response) {
			            			$scope.groundFlag = true;
									$scope.allData = response.data;
									$rootScope.allData =$scope.allData ;

									console.log(JSON.stringify(response.data.message));
									$location.path('/booking');
								}, function errorCallback(response) {
    							console.log("ffff");
						});
				}

}
});