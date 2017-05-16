angular
	.module('app', ['ui.router', 'ngclipboard'])
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
	var sort = 1;
	var date = '';

	objServices.getData = function(page, sort, date) {
		var filter = 'sort=' + sort + '&date=' + date;
		var url = services + '/front/packet?' + filter;
		if (page) {
			url = services + '/front/packet?page=' + page + '&' + filter;
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
			{'name': 'Profil Biro', 'active': false, 'url': '/profile'}
		];
		navbar[active].active = true;
		return navbar;
	};

	return objServices;
}