function cardController($location) {
	var vm = this;
	
    vm.$onInit = function() {
        vm.packetDetail = vm.cardData;
        vm.domain = $location.protocol() + "://" + $location.host() + ":" + $location.port();
    };

	vm.showDetail = function(event) {
        var content = $(event.target).parents('.ihram-card-full').children('.content');
		content.children('.ihram-card-grid').toggleClass('hide');
        content.find('.ihram-img').toggleClass('ihram-card-expand');
	};

    vm.showBooking = function(title, date) {
        $('#booking').modal('setting', 'transition', 'fade up').modal('show');
        $('#title-card').html(title + ' ' + date + ' Hari');
    };
}

angular
    .module('app')
    .component('ihramPacketCard', {
        templateUrl: 'app/card.html',
        controllerAs: 'vm',
        controller: cardController,
        bindings: {
        	cardData: '<'
        }
    });
