function cardController($location, $sce, $filter) {
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

    vm.showBooking = function(data) {
        var title = data.program;
        var date = data.date;
        $('#completed').hide();
        $('#formPotensial').show();
        $('#submitJamaah').show();
        $('#booking').modal('setting', 'transition', 'fade up').modal('show');
        $('#title-card').html(title + ' ' + date + ' Hari');
    };

    vm.showSyarat = function(id) {
        $('#syarat-' + id).modal('setting', 'transition', 'fade up').modal('show');
    };

    vm.asHtml = function(html) {
        return $sce.trustAsHtml(html);
    };

    vm.formatPrice = function(num) {
        var formated = '-';
        
        if (num) {
            formated = $filter('currency')(num, 'Rp ', 2);
        }
        return formated;
    };

    vm.shareLink = function(data) {
        var program = data.program;
        program = program.toLowerCase();
        program = program.replaceAll(' ', '-');
        return vm.domain + '/paket/' + program + '-' + data.id;
    };
}

angular
    .module('app')
    .component('ihramPacketCard', {
        templateUrl: 'app/card.html',
        controllerAs: 'vm',
        controller: cardController,
        bindings: {
        	cardData: '<',
            cardShared: '<'
        }
    });
