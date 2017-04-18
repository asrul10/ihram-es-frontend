function filterController() {
	var ctrl = this;

	ctrl.sortPacket = '1';

	$('#filter-tanggal').calendar({
		type: 'month'
	});	

	$('#reset-filter').click(function(event) {
		$('.date-ihram').val('');
		$('.dropdown').dropdown('set selected', '1');
	});
}
angular
    .module('app')
    .component('ihramFilter', {
        templateUrl: 'app/filter.html', 
        controller: filterController
    });