

dellHack.controller('dellController', function($scope, $http) {
    console.log('inside controller');
  //$http.get("http://starlord.hackerearth.com/beercraft").then(function (response) {
    $http.get("resources/dell.json").then(function (response) {
      $scope.myData = response.data;
      console.log(response);
    //   $scope.numberOfPages=function(){
    //     var round =  $scope.myData.length;
    //     var n = round.toFixed(0);
    //     console.log(n);
    //     return parseInt(n/$scope.pageSize);
    // }

  });
    //console.log($scope.myData.length);
    $scope.cartItems = 0
    $scope.currentPage = 0;
    $scope.pageSize = 9;

    $scope.myCartItems = [];

    $scope.myUser = false;
    $scope.showUser = function() {
        $scope.myUser = !$scope.myUser;
    };


    // $scope.numberOfPages=function(){
    //     return Math.ceil($scope.myData.length/$scope.pageSize);
    // }

});

dellHack.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
