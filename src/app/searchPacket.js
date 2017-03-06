function searchController($scope, $http) {
	// $('select.dropdown').dropdown();
	var ctrl = this;

	ctrl.model = {
		selectedGroup: null
	};

	// Get list program
	ctrl.getProgram = function() {
		var idGroup = ctrl.model.selectedGroup;
		$http({
			method: 'GET',
			url: services + '/front/getProgram?idGroup=' + idGroup
		}).then(getData, errorData);
	};

	function getData(response) {
		var optionsProgram = [];
        optionsProgram.push('<option value="">Pilih Program</option>');
		if (response.data) {
			angular.forEach(response.data, function(value, key) {
	            optionsProgram.push('<option value="' + value.id + '">' + value.name + '</option>');
			});
		}
		$('#ihram-select-program').html(optionsProgram.join(''));
	}

	function errorData(response) {
		console.log('Error 404');
	}
}

angular
	.module('app')
	.component('ihramSearchPacket', {
		templateUrl: 'app/searchPacket.html',
		controller: searchController,
        bindings: {
        	groupData: '='
        }
	});