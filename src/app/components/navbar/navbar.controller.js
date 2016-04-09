'use strict';

angular.module('ngFYM')
  .controller('NavbarController', ['$scope', '$document', '$location',  '$anchorScroll', '$translate', 'amMoment',
  	function($scope, $document, $location, $anchorScroll, $translate, amMoment) {
      $scope.navCollapsed = false;

      $scope.menuLangs = [
        {
        'title': 'English',
        'countryCode': 'en'
        },
        {
        'title': 'Français',
        'countryCode': 'fr'
        }
      ];

      $scope.changeLanguage = function (languageKey) {
        $translate.use(languageKey);
        $translate.refresh();
        $scope.lang = languageKey;
        //$rootScope.changeLocale = tmhDynamicLocale.set(languageKey);
        //$rootScope.$locale = $locale;
        console.log('lang: ' + $scope.lang);
        //console.log('$locale.id: ' + $locale.id);
        amMoment.changeLocale($scope.lang + '-ca');

      };
      // Top Navbar
      $scope.location = $location;

      $scope.menuItems = [
        {
          'title': 'global.menu.home',
          'id': '/#/#section-slides',
          'class': 'grow-rotate md-red btn-material-red',
          'subtitle': '',
          'controller': 'SlidesController',
          'template': 'components/slides/slides.html',
          'icon': 'mdi-device-gps-fixed',
          'action': 'gotoSection(section-slides)',
          'theme': 'md-red-theme',
          'color': 'red'
        },
        {
          'title': 'global.menu.about',
          'id': '/#/#section-about',
          'url': '/#/about/',
          'class': 'grow-rotate md-red btn-material-red',
          'subtitle': '',
          'controller': 'SlidesController',
          'template': 'components/main/main.html',
          'icon': 'mdi-device-gps-fixed',
          'action': 'gotoSection(section-about)',
          'theme': 'md-red-theme',
          'color': 'red'
        },
        {
          'title': 'global.menu.services',
          'url': '/#/services/',
          'id': '/#/#section-services',
          'class': 'grow-rotate md-red btn-material-red'
        },
        {
          'title': 'global.menu.schedule',
          'url': '/#/locations/',
          'id': '/#/#section-locations',
          'class': 'grow-rotate md-red btn-material-red'
        },
        {
          'title': 'global.menu.contact',
          'url': 'mailto:fymtransport@yahoo.com',
          'id': '/#/#section-callout',
          'class': 'grow-rotate md-red btn-material-red'
        }
      ];

    $scope.gotoSection = function(section) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(section);

      // call $anchorScroll()
      $anchorScroll();
    };

    $scope.toTheTop = function() {
      $anchorScroll();
    };
    }
  ]);
