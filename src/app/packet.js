function packetController(packetsService) {
	var vm = this;
	
	vm.$onInit = function() {
		vm.loading = '';
		vm.loadingPage = 'loading';
		vm.packetData = [];
		vm.page = 0;

		packetsService.getData().then(function(response) {
			vm.loadingPage = '';
			vm.packetData = response.data;
		});
	};

	vm.loadMore = function() {
		vm.loading = 'loading';
		vm.page += 1;

		packetsService.getData(vm.page).then(function(response) {
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
}

angular
    .module('app')
    .component('ihramPacket', {
        templateUrl: 'app/packet.html',
        controllerAs: 'vm',
        controller: packetController
    });
