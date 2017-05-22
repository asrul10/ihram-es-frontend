function footerController() {
	var vm = this;

	vm.$onInit = function() {
		var today = new Date();
		vm.year = today.getFullYear();
	};
}
angular
    .module('app')
    .component('ihramFooter', {
        templateUrl: 'app/footer.html',
        controller: footerController, 
        controllerAs: 'vm',
        bindings: {
        	footerData: '<'
        }
    });
