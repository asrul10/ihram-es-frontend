function cardController() {
	var ctrl = this;
	
	ctrl.detail = true;

	ctrl.showDetail = function(event) {
		$(event.target).parents('.ihram-card-full').children('.content').children('.ihram-card-grid').toggleClass('hide');
	};
}

angular
    .module('app')
    .component('ihramPacketCard', {
        templateUrl: 'app/card.html',
        controller: cardController,
        bindings: {
        	cardData: '='
        }
    });
