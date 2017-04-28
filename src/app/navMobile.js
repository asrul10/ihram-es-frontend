angular
    .module('app')
    .component('ihramNavMobile', {
        templateUrl: 'app/navMobile.html',
        controllerAs: 'vm',
        bindings: {
        	navData: '<'
        }
    });
