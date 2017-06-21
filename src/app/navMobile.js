function navMobController($window) {
	var vm = this;

	vm.redirectEs = function() {
		$window.location.href = '/index.php/agent/auth/login';
	};
}
angular
    .module('app')
    .component('ihramNavMobile', {
        templateUrl: 'app/navMobile.html',
        controllerAs: 'vm',
		controller: navMobController,
        bindings: {
        	navData: '<'
        }
    });
