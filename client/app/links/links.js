
 angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = [
    {'url': 'test url',
     'title': 'test title',
     'shortcode': 'test shortcode'
    }
  ];
  $scope.getLinks = function(){};

});
