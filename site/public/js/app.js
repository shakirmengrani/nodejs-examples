var myApp = angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'templates/app.html',
    controller:'AppCtrl'
  })
  .when('/:ID',{
    templateUrl:'templates/app.html',
    controller:'AppCtrl'
  })
  .when('/:ID/:ItemCode',{
    templateUrl:'templates/app.html',
    controller:'AppCtrl'
  })
  .otherwise({ redirectTo:'/' });
});

myApp.controller('AppCtrl',function($scope,$routeParams,$http){
  var uri = "//localhost/dashboard/index.php/api/";
  var method = "Product/getProduct"
  var successCB = function(response){
    $scope.data = response.data;
    $scope.QTY = 1;
  };
  var errorCB = function(response){
  };
  $http({
    method:'POST',
    url:uri + method,
    data:$routeParams
  }).then(successCB,errorCB);
});
