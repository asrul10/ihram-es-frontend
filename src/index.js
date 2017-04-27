angular
	.module('app', ['ui.router'])
	.run(metaTags)
	.factory('mainService', mainService)
	.factory('packetsService', packetsService)
	.factory('navService', navService);

function metaTags() {
	console.log("app run");
}

var services = 'http://localhost:8080';

/**
 * Service Home Page
 */
function mainService($http) {
	var objServices = {};
	var content = 'home';

	objServices.getData = function(content) {
		return $http({
			method: 'GET',
			cache: true,
			url: services + '/front/data?content=' + content
		});
	};

	return objServices;
}

/**
 * Service Packets
 */
function packetsService($http) {
	var objServices = {};
	var page = 0;

	objServices.getData = function(page) {
		var url = services + '/front/packet';
		if (page) {
			url = services + '/front/packet?page=' + page;
		}

		return $http({
			method: 'GET',
			url: url
		});
	};

	return objServices;
}

/**
 * Service Navbar
 */
function navService($http) {
	var objServices = {};
	var active = 0;

	objServices.getData = function(active) {
		var navbar = [
			{'name': 'Home', 'active': false, 'url': '/home'},
			{'name': 'Informasi', 'active': false, 'url': '#'},
			{'name': 'Profil Biro', 'active': false, 'url': '/profile'}
		];
		navbar[active].active = true;
		return navbar;
	};

	return objServices;
}