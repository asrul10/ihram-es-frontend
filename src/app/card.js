function cardController() {
	var ctrl = this;
	
	ctrl.detail = true;

	ctrl.showDetail = function(event) {
        var content = $(event.target).parents('.ihram-card-full').children('.content');
		content.children('.ihram-card-grid').toggleClass('hide');
        content.find('.ihram-img').toggleClass('ihram-card-expand');
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
