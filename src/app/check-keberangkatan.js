function checkController() {
	var vm = this;

	vm.$onInit = function() {
		$('.ui.radio.checkbox').checkbox();
		vm.typeCode = "booking";
		vm.placeholder = 'Kode Booking';
		vm.code = '';
	};

	vm.changeType = function(code) {
		vm.placeholder = code;
	};

	vm.reset = function() {
		$('.type-code[value="booking"]').prop('checked', true);
		vm.code = '';
	};

    vm.showResult = function() {
        $('#check-keberangkatan').modal('setting', 'transition', 'fade up').modal('show');
    };
}

angular
    .module('app')
    .component('ihramCheckKeberangkatan', {
        templateUrl: 'app/check-keberangkatan.html',
        controllerAs: 'vm',
        controller: checkController
    });
