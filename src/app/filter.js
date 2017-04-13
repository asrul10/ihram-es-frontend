function filterController($scope) {
	var ctrl = this;

	ctrl.date = '';
	ctrl.sortPacket = '1';

	$('#filter-tanggal').calendar({
		type: 'month'
	});	

	ctrl.reset = function() {
	};
}
angular
    .module('app')
    .component('ihramFilter', {
        templateUrl: 'app/filter.html', 
        controller: filterController
    });
