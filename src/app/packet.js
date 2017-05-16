function packetController(packetsService, $location) {
	var vm = this;
	var sort = 1;
	var date = '';
	var params = $location.search();

	vm.$onInit = function() {
		vm.loading = '';
		vm.loadingPage = 'loading';
		vm.packetData = [];
		vm.packetDataShare = [];
		vm.page = 0;

		if (typeof(params.packet) !== 'undefined') {
			packetsService.getData(0, sort, date, params.packet).then(function(response) {
				vm.packetDataShare = response.data;
			});
		}

		packetsService.getData(0, sort, date).then(function(response) {
			vm.loadingPage = '';
			vm.packetData = response.data;
		});
	};

	vm.loadMore = function() {
		vm.loading = 'loading';
		vm.page += 1;

		packetsService.getData(vm.page, sort, date).then(function(response) {
			if (response.data.length !== 0) {
				for (var i = 0; i < response.data.length; i++) {
					vm.packetData.push(response.data[i]);
				}
				vm.loading = '';
			} else {
				vm.loading = 'hide';
			}
		}, function(response) {
			console.log('error');
			vm.loading = '';
		});
	};

	vm.filterSubmit = function() {
		vm.loading = '';
		vm.loadingPage = 'loading';
		vm.page = 0;

		date = $('.filter-date').val();
		sort = $('.filter-sort').find(":selected").val();

		vm.loadingPage = 'loading';
		packetsService.getData(0, sort, date).then(function(response) {
			vm.loadingPage = '';
			vm.packetData = response.data;
		});
	};
}

angular
    .module('app')
    .component('ihramPacket', {
        templateUrl: 'app/packet.html',
        controllerAs: 'vm',
        controller: packetController
    });
