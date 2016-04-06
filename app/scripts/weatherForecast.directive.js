(function() {
    'use strict';

    angular
        .module('weartherForecastApp')
        .directive('weather', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    icon: '@'
                },
                controller: function($scope) {
                    $scope.imgurl = function() {
                        return 'http://openweathermap.org/img/w/' + $scope.icon + '.png';
                    };
                },
                template: '<img class="weatherIcon" ng-src="{{ imgurl() }}">'
            };
        });
})();
