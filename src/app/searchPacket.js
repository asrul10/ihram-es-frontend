function searchController($scope, $http, $location) {
    var vm = this;
}

angular
    .module('app')
    .component('ihramSearchPacket', {
        templateUrl: 'app/searchPacket.html',
        controllerAs: 'vm',
        controller: searchController,
    });
