/**
 * @ngdoc function
 * @name ngFYM.directive:LanguageSelectDirective
 * @description
 * # LanguageSelectDirective
 * Directive to append language select and set its view and behavior
 */
angular.module('ngFYM')
  .directive('ngTranslateLanguageSelect', function (LocaleService) {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      template: ''+
        '<div class="language-select" ng-if="visible">'+
          '<label>'+
            '<select ng-model="currentLocaleDisplayName"'+
              'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
              'ng-init="currentLocaleDisplayName = localesDisplayName || options[1].value"'+
              'ng-change="changeLanguage(currentLocaleDisplayName)">'+
            '</select>'+
          '</label>'+
        '</div>'+
      '',
      controller: function ($scope) {
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames &&
        $scope.localesDisplayNames.length > 1;
        //console.log('currentLocaleDisplayNames: ' + $scope.currentLocaleDisplayNames);
        $scope.changeLanguage = function (locale) {
          LocaleService.setLocaleByDisplayName(locale);
        };

      }
    };
  });
