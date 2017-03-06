angular
    .module('app')
    .component('ihramPacketCards', {
        templateUrl: 'app/cards.html',
        bindings: {
        	cardsData: '='
        }
    });
