angular
	.module('app')
	.component('ihramHeader', {
		templateUrl: 'app/header.html',
		controllerAs: 'vm',
		bindings: {
			headerData: '<',
			smallMode: '<'
		}
	});