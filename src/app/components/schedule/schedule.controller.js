'use strict';

angular.module('ngFYM').controller('ScheduleController', ['$scope', '$http',
      function($scope, $http) {

            $http.get('/app/data/schedule.json').success(function(data) {
                $scope.results = data.results;
            }).error(function(data, status, headers, config) {
                console.log('error');
            
            });


            $scope.message = {
               text: 'hello world!',
               time: new Date()
            };
            $scope.cities = [
            {'name':'Montreal'},
            {'name':'Toronto'},
            {'name':'Winnipeg'},
            {'name':'Saskatoon'},
            {'name':'Regina'},
            {'name':'Edmonton'},
            {'name':'Calgary'},
            {'name':'Kelowna'},
            {'name':'Vancouver'},
            {'name':'Victoria'}];


            $scope.services = [
            {'name':'pickup'},
            {'name':'delivery'}];
            
            $scope.selectionService=[];
            // toggle selection for a given service by name
            $scope.toggleSelectionService = function toggleSelectionService(serviceName) {
                var idxService = $scope.selectionService.indexOf(serviceName);

                // is currently selected
                if (idxService > -1) {
                  $scope.selectionService.splice(idxService, 1);
                }

                // is newly selected
                else {
                  $scope.selectionService.push(serviceName);
                }
            };

            $scope.directions = [
            {'name':'westbound'},
            {'name':'eastbound'}];

            $scope.selectionDirection=[];
            // toggle selection for a given direction by name
            $scope.toggleSelectionDirection = function toggleSelectionDirection(directionName) {
                var idxDirection = $scope.selectionDirection.indexOf(directionName);

                // is currently selected
                if (idxDirection > -1) {
                  $scope.selectionDirection.splice(idxDirection, 1);
                }

                // is newly selected
                else {
                  $scope.selectionDirection.push(directionName);
                }
            };
      }
]);
