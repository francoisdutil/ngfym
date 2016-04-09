'use strict';

angular.module('ngFYM').controller('FooterController', ['$scope',
	function($scope) {
    // Footer
    $scope.date = new Date();

    $scope.comments = [
      {
        'title': 'AngularJS is GREAT!',
        'url': '/#/'
      },
      {
        'title': 'Bootstrap all the way',
        'url': '/#/'
      },
      {
        'title': 'FYM is available online',
        'url': '/#/'
      },
      {
        'title': 'About the Standards',
        'url': '/#/'
      },
      {
        'title': 'First the Mayas, then XumaK...',
        'url': '/#/'
      }
    ];

    $scope.tags = [
      {
        'title': 'home',
        'url': '/#/'
      },
      {
        'title': 'Fine Art Delivery',
        'url': '/#/'
      },
      {
        'title': 'services',
        'url': '/#/services/'
      },
      {
        'title': 'Across Canada',
        'url': '/#/locations/'
      },
      {
        'title': 'contact',
        'url': '/#/contact/'
      }
    ];
    angular.forEach($scope.tags, function(tag) {
      tag.rank = Math.random();
    });
  }
]);
