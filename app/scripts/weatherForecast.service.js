(function() {
    'use strict';

    angular
        .module('weartherForecastApp')
        .factory('weartherForecastService', [
            '$http',
            function($http) {
                // valid cities: http://openweathermap.org/help/city_list.txt
                // http://openweathermap.org/appid
                var appid = '3d4fee1831549591e625ef0636607180';
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
