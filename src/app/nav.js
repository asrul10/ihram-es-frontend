function navController() {
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