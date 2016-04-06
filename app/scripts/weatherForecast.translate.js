(function() {
    'use strict';

    angular
        .module('weartherForecastApp')
        .config(function($translateProvider) {
            $translateProvider.translations('pt', {
                'actualTemperature': 'Temperatura atual',
                'minimumTemperature': 'Temperatura minima',
                'maximumTemperature': 'Temperatura máxima',
                'messageNoCity': 'Por favor, digite uma cidade para pegar as informações do tempo',
                'city': 'Cidade',
                'verifyTemp': 'Verificar tempo',
                'timeIn': 'Tempo em {{value}}',
                'description': 'Descrição',

                'few clouds': 'Poucas nuvems',
                'clear sky': 'Céu limpo',
                'broken clouds': 'Nuvens quebradas',
                'overcast clouds': 'Nublado',
                'Sky is Clear': 'Céu limpo'
            });

            $translateProvider.preferredLanguage('pt');
            $translateProvider.useSanitizeValueStrategy('escape');
        });
})();
