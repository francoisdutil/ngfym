'use strict';

angular.module('ngFYM').controller('LocationsController', ['$scope',
	function($scope) {
		$scope.oneAtATime = true;


    $scope.locations = [
      {
        'title': 'sectionLocations.cities.quebec',
        'sortId': '1',
        'thumbnail': '/assets/images/loc-quebec.jpg'
      },
      {
        'title': 'sectionLocations.cities.montreal',
        'sortId': '2',
        'thumbnail': '/assets/images/loc-montreal.jpg'
      },
      {
        'title': 'sectionLocations.cities.ottawa',
        'sortId': '3',
        'thumbnail': '/assets/images/loc-ottawa.jpg'
      },
      {
        'title': 'sectionLocations.cities.toronto',
        'sortId': '4',
        'thumbnail': '/assets/images/loc-toronto.jpg'
      },
      {
        'title': 'sectionLocations.cities.winnipeg',
        'sortId': '5',
        'thumbnail': '/assets/images/loc-winnipeg.jpg'
      },
      {
        'title': 'sectionLocations.cities.regina',
        'sortId': '6',
        'thumbnail': '/assets/images/loc-regina.jpg'
      },
      {
        'title': 'sectionLocations.cities.saskatoon',
        'sortId': '7',
        'thumbnail': '/assets/images/loc-saskatoon.jpg'
      },
      {
        'title': 'sectionLocations.cities.edmonton',
        'sortId': '8',
        'thumbnail': '/assets/images/loc-edmonton.jpg'
      },
      {
        'title': 'sectionLocations.cities.calgary',
        'sortId': '9',
        'thumbnail': '/assets/images/loc-calgary.jpg'
      },
      {
        'title': 'sectionLocations.cities.kelowna',
        'sortId': '10',
        'thumbnail': '/assets/images/loc-kelowna.jpg'
      },
      {
        'title': 'sectionLocations.cities.vancouver',
        'sortId': '11',
        'thumbnail': '/assets/images/loc-vancouver.jpg'
      },
      {
        'title': 'sectionLocations.cities.victoria',
        'sortId': '12',
        'thumbnail': '/assets/images/loc-victoria.jpg'
      }
    ];
  }
]);
