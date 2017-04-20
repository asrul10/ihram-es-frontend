function packetController(packetsService) {
	var ctrl = this;
	
	ctrl.loading = '';
	ctrl.loadingPage = 'loading';
	ctrl.packetData = [];
	ctrl.page = 0;

	packetsService.getData().then(getData, errorData);

	function getData(response) {
		ctrl.loadingPage = '';
		ctrl.packetData = response.data;
	}

	function errorData(response) {
		console.log('Error');
	}

	ctrl.loadMore = function() {
		ctrl.loading = 'loading';
		ctrl.page += 1;

		packetsService.getData(ctrl.page).then(function(response) {
			if (response.data.length !== 0) {
				for (var i = 0; i < response.data.length; i++) {
					ctrl.packetData.push(response.data[i]);
				}
				ctrl.loading = '';
			} else {
				ctrl.loading = 'hide';
			}
		}, function(response) {
			console.log('error');
			ctrl.loading = '';
		});
	};
}

angular
    .module('app')
    .component('ihramPacket', {
        templateUrl: 'app/packet.html',
        controller: packetController
    });
