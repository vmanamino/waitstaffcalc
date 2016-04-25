angular.module('myApp', [])
    .controller('myCtrl', function($scope){
        $scope.basemeal = '';
        $scope.taxrate = '';
        $scope.tipPercentage = '';
        $scope.tip =  0;
        $scope.subtotal = '';
        $scope.total = '';
        $scope.tiptotal = 0;
        $scope.meals = 0;
        $scope.avg = '';
        $scope.displayErrors = 'no';
        
        $scope.submit = function(){
            if ($scope.basemeal && $scope.taxrate && $scope.tipPercentage){
                $scope.subtotal = $scope.basemeal + ($scope.taxrate / 100);
                $scope.tip = $scope.basemeal * ($scope.tipPercentage / 100);
                $scope.total = $scope.subtotal + $scope.tip;
                addUp($scope.tip);
                
            }
            else {
                $scope.displayErrors = '';
            }
        };
        $scope.cancel = function(){
            $scope.basemeal = '';
            $scope.taxrate = '';
            $scope.tipPercentage = '';
        }
        var addUp = function(tip){
            $scope.meals += 1;
            $scope.tiptotal += tip;
            $scope.avg = $scope.tiptotal / $scope.meals
            
            
        };
        $scope.reset = function(){
            $scope.basemeal = '';
            $scope.taxrate = '';
            $scope.tipPercentage = '';
            $scope.tip =  0;
            $scope.subtotal = '';
            $scope.total = '';
            $scope.tiptotal = 0;
            $scope.meals = 0;
            $scope.avg = '';
            $scope.displayErrors = 'no';
        };
    })