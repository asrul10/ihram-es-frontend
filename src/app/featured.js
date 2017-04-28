angular
    .module('app')
    .component('ihramFeatured', {
        templateUrl: 'app/featured.html',
        controllerAs: 'vm',
        bindings: {
        	featuredData: '<'
        }
    });
