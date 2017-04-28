angular
    .module('app')
    .component('ihramTitle', {
        templateUrl: 'app/title.html',
        controllerAs: 'vm',
        bindings: {
        	titleData: '@'
        }
    });
