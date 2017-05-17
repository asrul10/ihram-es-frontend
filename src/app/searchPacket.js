function searchController($scope, $http, $location, anchorSmoothScroll, $window) {
    var vm = this;

    vm.gotoElement = function(eID) {
        anchorSmoothScroll.scrollTo(eID);
    };
}

angular
    .module('app')
    .component('ihramSearchPacket', {
        templateUrl: 'app/searchPacket.html',
        controllerAs: 'vm',
        controller: searchController,
    });
