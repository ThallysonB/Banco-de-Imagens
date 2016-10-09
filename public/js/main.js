angular.module('empregosrn', ['myDirectives', 'ngAnimate', 'ngRoute', 'meusServicos'])
  .config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController'
    });

    $routeProvider.when('/nova', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    });
    $routeProvider.when('/editar/:fotoId', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    });

    $routeProvider.otherwise({ redirectTo: '/'});

});