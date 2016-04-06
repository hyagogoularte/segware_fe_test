(function() {
    'use strict';

    angular
        .module('weartherForecastApp')
        .factory('weartherForecastService', [
            '$http',
            function($http) {
                // valid cities: http://openweathermap.org/help/city_list.txt
                var appid = '279b4be6d54c8bf6ea9b12275a567156';
                var typeCallback = 'JSON_CALLBACK';
                var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=:city,at&units=metric&callback=' + typeCallback + '&APPID=' + appid;

                return {
                    getWeartherForecast: function(city, success) {
                        $http.jsonp(baseUrl.replace(':city', city)).success(success);
                    }
                };
            }
        ]);
})();
