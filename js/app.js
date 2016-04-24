angular.module('myApp', [])
    .controller('myCtrl', function($scope){
        $scope.basemeal = '';
        $scope.taxrate = '';
        $scope.tipPercentage = '';
        $scope.tip = '';
        $scope.subtotal = '';
        $scope.total = '';
        $scope.tiptotal = '';
        $scope.meals = '';
        $scope.avg = '';
        $scope.displayErrors = 'no';
        $scope.submit = function(){
            if ($scope.basemeal && $scope.taxrate && $scope.tipPercentage){
                $scope.subtotal = $scope.basemeal + ($scope.taxrate / 100);
                $scope.tip = $scope.basemeal * ($scope.tipPercentage / 100);
                $scope.total = $scope.subtotal + $scope.tip;
            }
            else {
                $scope.displayErrors = '';
            }
        };
        $scope.addTwo = function(){
            
        };
        $scope.reset = function(){
            
        };
    })