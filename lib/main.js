angular.module('ImageSafe', ['ngRoute']).config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        'templateUrl': 'lib/views/home.html',
        'controller': 'MainController'
    });

    $routeProvider.otherwise({ redirectTo: '/'});
});
