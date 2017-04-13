function filterController() {
	$('#filter-tanggal').calendar({
		type: 'month'
	});	
}
angular
    .module('app')
    .component('ihramFilter', {
        templateUrl: 'app/filter.html', 
        controller: filterController
    });
