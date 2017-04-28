angular
    .module('app')
    .component('ihramDescription', {
        templateUrl: 'app/description.html',
        controllerAs: 'vm',
        bindings: {
        	descriptionData: '<'
        } 
    });
