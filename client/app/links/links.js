
 angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    console.log('\ngetLinks fired\n');
    Links.links('GET')
      .success(function(data, status, headers, config){
        console.log('links get success:', data);
        $scope.data.links = data;
      })
      .error(function(){
        console.log('link get error')
      })
    // return $scope.data.links;
  };
  // is this correct to call it here???
  $scope.getLinks();
});
