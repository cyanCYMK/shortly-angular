angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    Links.links('POST', $location.url())
      .success(function(data, status, headers, config){
        console.log('link post success:', data);
        $scope.link = data;
      })
      .error(function(){
        console.log('link post error')
      })
  };
});
