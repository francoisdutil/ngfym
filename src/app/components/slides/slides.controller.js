'use strict';

angular.module('ngFYM').controller('SlidesController', ['$scope',
	function($scope) {

		$scope.myInterval = 5000;
	  $scope.slides = [
	    {
	      image: '/assets/images/slide_1.jpg',
				title: 'slide1-title',
				tagline: 'slide1-tagline',
				message: 'slide1-message',
				color: '#F0CF66',
				fontColorTxt: '#f9000e',
				fontColorMsg: '#fb8411'
	    },
	    {
	      image: '/assets/images/slide_2.jpg',
				title: 'slide2-title',
				tagline: 'slide2-tagline',
				message: 'slide2-message',
				color: '#ff9c0c',
				fontColorTxt: '#F0CF66',
				fontColorMsg: '#deb034'
	    },
	    {
	      image: '/assets/images/slide_3.jpg',
				title: 'slide3-title',
				tagline: 'slide3-tagline',
				message: 'slide3-message',
				color: 'red',
				fontColorTxt: '#05cffa',
				fontColorMsg: '#05cffa'
	    }
	  ];
		$scope.slidesxs = [
	    {
	      image: '/assets/images/slide_1-xs.jpg',
				title: 'slide1-title',
				tagline: 'slide1-tagline',
				message: 'slide1-message',
				color: '#FF9C0C',
				fontColorTxt: '#f9000e',
				fontColorMsg: '#fb8411'
	    },
	    {
	      image: '/assets/images/slide_2-xs.jpg',
				title: 'slide2-title',
				tagline: 'slide2-tagline',
				message: 'slide2-message',
				color: '#ff9c0c',
				fontColorTxt: '#F0CF66',
				fontColorMsg: '#eaece9'
	    },
	    {
	      image: '/assets/images/slide_3-xs.jpg',
				title: 'slide3-title',
				tagline: 'slide3-tagline',
				message: 'slide3-message',
				color: 'red',
				fontColorTxt: '#05cffa',
				fontColorMsg: '#05cffa'
	    }
	  ];
  }
]);
