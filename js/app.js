angular.module('myApp', [])
    .controller('myCtrl', function($scope){
        $scope.basemeal = '';
        $scope.submit = function(){
            if ($scope.basemeal){
                console.log($scope.basemeal);
            }
        };
        $scope.addTwo = function(){
            if ($scope.basemeal){
                console.log($scope.basemeal + 2);
            }
        };
    })