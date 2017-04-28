function searchController($scope, $http) {
	var vm = this;

	$('#search-tanggal').calendar({
		type: 'month'
	});	
}

angular
	.module('app')
	.component('ihramSearchPacket', {
		templateUrl: 'app/searchPacket.html',
		controllerAs: 'vm',
		controller: searchController,
	});