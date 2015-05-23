'use strict';

angular.module('surfguruApp')
    .controller('SurfspotCtrl', function($scope, $http) {
        $scope.message = 'Hello';

        $scope.surfSpots = [{
            name: "Ofir",
            id: "2742032"
        }, {
            name: "Povoa de Varzim",
            id: "2735787"
        }, {
            name: "Nazaré",
            id: "2265552"
        }]

        var getInfo = function() {
            angular.forEach($scope.surfSpots, function(spot) {
                $http.get('http://api.openweathermap.org/data/2.5/weather?id=' + spot.id).then(function(response) {
                    spot.info = response.data
                })
            })
        }

        var icons = {
            sunny: "wi-day-sunny",
            cloudy: "wi-day-cloudy",
            rain: "wi-day-rain"
        }
        var img = "http://nsullivandesign.com/wp-content/uploads/2014/10/flat_sun.jpg"
        $scope.getSunImage = function(value) {
            var res;
            switch (value) {
                case 'Clear':
                    res = icons.sunny
                    break;
                case 'rain':
                    res = icons.cloudy
                    break;
            }

            return res;
        }

        // INIT FUNCTION
        getInfo();



    });
