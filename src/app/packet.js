function packetController($http) {
	var ctrl = this;
	
	ctrl.loading = '';
	ctrl.packetData = [];
	ctrl.page = 0;
	ctrl.loading = 'loading';

	$http({
		method: 'GET',
		url: services + '/front/packet'
	}).then(getData, errorData);

	function getData(response) {
		ctrl.loading = '';
		ctrl.packetData = response.data;
	}

	function errorData(response) {
		console.log('Error');
	}

	ctrl.loadMore = function() {
		ctrl.loading = 'loading';
		ctrl.page += 1;

		$http({
			method: 'GET',
			url: services + '/front/packet?page=' + ctrl.page
		}).then(function(response) {
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
