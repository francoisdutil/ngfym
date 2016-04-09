'use strict';

angular.module('ngFYM', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'duScroll', 'pascalprecht.translate', 'tmh.dynamicLocale', 'angularMoment', 'ngDialog'])

    .constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)
    .constant('VERSION_TAG', /*VERSION_TAG_START*/new Date().getTime()/*VERSION_TAG_END*/)
    .constant('LOCALES', {
      'locales': {
        'en_US': 'English',
        'fr_CA': 'Français'
      },
      'preferredLocale': 'en_US'
    })

  .config(function ($stateProvider, $urlRouterProvider, $translateProvider, tmhDynamicLocaleProvider, DEBUG_MODE, LOCALES) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/main/main.html',
        controller: 'MainController'
      })
      .state('schedule', {
        url: '/schedule',
        templateUrl: '/app/components/schedule/schedule.html',
        controller: 'ScheduleController'
      });

    $urlRouterProvider.otherwise('/');

    // Initialize angular-translate

    $translateProvider.preferredLanguage(LOCALES.preferredLocale);
    $translateProvider.useLocalStorage();

    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.json'
    });

    $translateProvider.registerAvailableLanguageKeys(['en', 'fr'], {
      'en_US': 'en',
      'en_UK': 'en',
      'en_AU': 'en',
      'en_CA': 'en',
      'en_GB': 'en',
      'en_NZ': 'en',
      'fr_FR': 'fr',
      'fr_CA': 'fr',
      'fr_BE': 'fr',
      'fr_CH': 'fr'
    });

    $translateProvider.useCookieStorage();

    tmhDynamicLocaleProvider.localeLocationPattern('../bower_components/angular-i18n/angular-locale_{{locale}}.js');
  });


