function filterController() {
	var vm = this;

	vm.$onInit = function() {
		$('.dropdown').dropdown();
		vm.sortPacket = '1';
	};

	// vm.$onChange = function() {
	// 	$('.dropdown').dropdown();
	// };
	
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
        controllerAs: 'vm',
        controller: filterController,
        bindings: {
        	filterSubmit: '&'
        }
    });