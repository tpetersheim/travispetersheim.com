
webApp.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'app/shared/template/templateView.html',
            controller  : 'homeController'
        })
        .when('/about', {
            templateUrl : 'app/shared/template/templateView.html',
            controller  : 'aboutController'
        })
        .when('/contact', {
            templateUrl : 'app/shared/template/templateView.html',
            controller  : 'contactController'
        });

        $locationProvider.html5Mode(true);
});

