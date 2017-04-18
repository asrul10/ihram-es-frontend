function searchController($scope, $http) {
	// $('select.dropdown').dropdown();
	var ctrl = this;

	$('#search-tanggal').calendar({
		type: 'month'
	});	
}

angular
	.module('app')
	.component('ihramSearchPacket', {
		templateUrl: 'app/searchPacket.html',
		controller: searchController,
        bindings: {
        	groupData: '='
        }
	});