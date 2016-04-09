'use strict';

angular.module('ngFYM').controller('MainController', ['$scope', '$rootScope', '$translate','$anchorScroll', 'ngDialog', 
	function($scope, $rootScope, $translate, $anchorScroll, ngDialog) {
		$scope.oneAtATime = true;

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


  	$anchorScroll();
		/**
     * Translations for the view
     */
    var pageTitleTranslationId = 'PAGE_TITLE';
    var pageContentTranslationId = 'PAGE_CONTENT';

    $translate(pageTitleTranslationId, pageContentTranslationId)
      .then(function (translatedPageTitle, translatedPageContent) {
        $rootScope.pageTitle = translatedPageTitle;
        $rootScope.pageContent = translatedPageContent;
      });
		/**
     * $scope.locale
     */
    $scope.locale = $translate.use();

		/**
     * EVENTS
     */
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      $scope.locale = data.language;
      $rootScope.pageTitle = $translate.instant(pageTitleTranslationId);
      $rootScope.pageContent = $translate.instant(pageContentTranslationId);
    });

    // Modal contact Map
    $scope.showDialogNewService = function () {
      $scope.value = true;
      ngDialog.open({
        template: '/app/main/modal.new.service.html',
        className: 'ngdialog-theme-default',
        scope: $scope
      });
    };

  $anchorScroll();

  }
]);
