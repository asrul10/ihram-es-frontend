function navFixedController($window) {
}

angular
    .module('app')
    .component('ihramNavFixed', {
        templateUrl: 'app/navFixed.html',
        controller: navFixedController,
		bindings: {
			navData: "="
		},
    });