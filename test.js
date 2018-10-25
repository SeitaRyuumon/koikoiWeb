/*
 * test用
 */


'use strict';

window.addEventListener('DOMContentLoaded', function() {

	gameStart();

});

// ゲーム開始
let gameStart = function() {
	Stock.deals('myHand', 8);
	Deck.setCards('myHand');
	//debug(Deck.cards);
	// Card.disp(Deck.cards);

}

let debug = function(x) {
	console.log(x);
}

