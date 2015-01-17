angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
    'url': ''
  };
  $scope.addLink = function(){
    Links.links('POST', $scope.link)
      .success(function(data, status, headers, config){
        console.log('link post success:', data);
        $scope.link = data;
        $location.path('/links');
      })
      .error(function(err){
        console.log('link post error:', err);
      })
  };
});
