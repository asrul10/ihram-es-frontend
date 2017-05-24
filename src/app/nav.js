function navController($window) {
	var vm = this;

	$('.ui.sidebar').sidebar({ context: $('#app-container') });

	var activeBar = true;

	$('.toc').click(function(event) {
		if (activeBar) {
			$('.ui.sidebar').sidebar('toggle');
			activeBar = false;
		} else {
			activeBar = true;
		}
	});

	vm.redirectEs = function() {
		$window.location.href = '/index.php/agent/auth/login';
	};
}

angular
    .module('app')
    .component('ihramNav', {
        templateUrl: 'app/nav.html',
        controllerAs: 'vm',
		controller: navController,
		bindings: {
			navData: "<"
		},
    });