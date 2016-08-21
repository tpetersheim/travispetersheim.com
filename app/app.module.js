var webApp = angular.module('webApp', 
    [
        'ngRoute', 
        'ngAnimate',
		'LocalStorageModule'
	]
).config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('travispetersheim')
        .setStorageType('localStorage');
});