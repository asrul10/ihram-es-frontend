angular
	.module('app', ['ui.router'])
	.run(metaTags)
	.factory('mainService', mainService)
	.factory('packetsService', packetsService)
	.controller('appCtrl', appCtrl);

function metaTags() {
	console.log("app run");
}

var services = 'http://localhost:8080';

/**
 * Service Home Page
 */
function mainService($http) {
	var objServices = {};

	objServices.getData = function() {
		return $http({
			method: 'GET',
			url: services + '/front/data'
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

function appCtrl(mainService) {
	console.log('msg');
}