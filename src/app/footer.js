angular
    .module('app')
    .component('ihramFooter', {
        templateUrl: 'app/footer.html',
        controllerAs: 'vm',
        bindings: {
        	footerData: '<'
        }
    });
