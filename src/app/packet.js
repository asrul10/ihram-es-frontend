function packetController(packetsService, $stateParams, anchorSmoothScroll, jamaahService) {
	var vm = this;
	var sort = 1;
	var date = '';

	vm.$onInit = function() {
		vm.loading = '';
		vm.loadingPage = 'loading';
		vm.packetData = [];
		vm.packetDataShare = [];
		vm.page = 0;
		vm.jamaah = {
			name: '',
			phone: '',
			email: '',
			address: ''
		};

		if (typeof($stateParams.packetId) !== 'undefined') {
			var id = $stateParams.packetId;
			var pieces = id.split('-');
			id = pieces[pieces.length - 1];
			packetsService.getData(0, sort, date, id).then(function(response) {
				vm.packetDataShare = response.data;
				angular.element(document).ready(function () {
			        anchorSmoothScroll.scrollTo('packet-' + id);
				});
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

	vm.submitJamaah = function() {
		$('#completed').html('');
		$('#completed').show().html('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="100px" y="100px" viewBox="0 0 98.5 98.5" enable-background="new 0 0 98.5 98.5" xml:space="preserve">  <path class="checkmarkAnimate" fill="none" stroke-width="8" stroke-miterlimit="10" d="M81.7,17.8C73.5,9.3,62,4,49.2,4 C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/></svg>');
		$('#formPotensial').hide();
		$('#submitJamaah').hide();
		$('#submitJamaah').addClass('disabled');

		var data = {
			jamaah: {
				NAMA_LENGKAP: vm.jamaah.name,
				EMAIL: vm.jamaah.email,
				MOBILE: 0 + vm.jamaah.phone,
				ALAMAT: vm.jamaah.address
			},
			jamaahPotensial: {
				ID_PROGRAM: $('#ihram-id-program').val()
			}
		};

		jamaahService.postData(data).then(function(response) {
			$('#submitJamaah').removeClass('disabled');
			console.log(response);
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
