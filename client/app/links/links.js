
 angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  // Your code here
  $scope.links = [];
  $scope.getLinks = function(){
    console.log('\ngetLinks fired\n');
    Links.links('GET')
      .success(function(data, status, headers, config){
        $scope.links = data;
        console.log('\nlinks get success');
        console.log('$scope.links:', $scope.links);

      })
      .error(function(){
        console.log('link get error')
      })
    // return $scope.data.links;
  };
  // is this correct to call it here???
  $scope.getLinks();
});
