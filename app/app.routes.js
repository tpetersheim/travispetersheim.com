
webApp.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'app/components/home/homeView.html',
            controller  : 'homeController'
        })
        .when('/about', {
            templateUrl : 'app/components/about/aboutView.html',
            controller  : 'aboutController'
        })
        .when('/contact', {
            templateUrl : 'app/components/contact/contactView.html',
            controller  : 'contactController'
        })
        .when('/cora', {
            templateUrl : 'app/components/cora/coraView.html',
            controller  : 'coraController'
        });

        //$locationProvider.html5Mode(true);
});

