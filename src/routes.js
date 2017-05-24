angular
	.module('app')
	.config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('app', {
			url: '/',
			component: 'app'
		})
		.state('packet', {
			url: '/packet/:packetId',
			component: 'app'
		})
		.state('profile', {
			url: '/profile',
			component: 'profile'
		});
}