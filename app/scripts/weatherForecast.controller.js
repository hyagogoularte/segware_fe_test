(function() {
    'use strict';

    angular
        .module('weartherForecastApp', [
            'pascalprecht.translate'
        ])
        .filter('transformToCentrigrate', function($filter) {
            return function(value) {
                return $filter('number')(value, 1) + '\u00B0C';
            };
        })
        .controller('weartherForecastController', [
            '$scope',
            'weartherForecastService',
            function($scope, Service) {
                $scope.hasData = false;
                $scope.weather = {
                    temperature: {},
                    cloud: {}
                };

                $scope.getWeatherForecast = function(city) {
                    if (!angular.isDefined(city) || city === '') {
                        $scope.hasData = false;
                        return;
                    }

                    Service.getWeartherForecast(city, function(data) {
                        console.log(data);
                        $scope.hasData = true;

                        if (data && data.main) {
                            if (data.name !== city) {
                                $scope.hasData = false;
                                return;
                            }

                            $scope.weather.temperature.current = data.main.temp;
                            $scope.weather.temperature.min = data.main.temp_min;
                            $scope.weather.temperature.max = data.main.temp_max;

                            $scope.weather.cloud.description = data.weather[0].description;
                            $scope.weather.cloud.icon = data.weather[0].icon;
                        }
                    });
                };

                $scope.$watch('city', function(newValue, oldValue) {
                    if (!angular.isDefined(newValue)) {
                        return;
                    }

                    if (newValue !== oldValue) {
                        $scope.hasData = false;
                    }
                });
            }
        ]);

})();
