angular
    .module('app')
    .component('ihramNavFixed', {
        templateUrl: 'app/navFixed.html',
        controllerAs: 'vm',
		bindings: {
			navData: "<"
		},
    });