/*
 * test用
 */


'use strict';


import _ from 'lodash';


window.addEventListener('DOMContentLoaded', function() {

	gameStart();

});

// ゲーム開始
let gameStart = function() {
	Stock.deals('myHand', 8);
	Deck.setCards('myHand');
	debug(Deck.cards);
	// Card.disp(Deck.cards);

	const itemArr = [
  {id: 1, value: 10},
  {id: 2, value: 100},
	]

const newItemArr = _.cloneDeep(itemArr)
newItemArr[0] = 1
newItemArr[1].value = 200

cosole.log(itemArr[0]) // {id: 1, value: 10}
cosole.log(itemArr[1].value) // 100
}

let debug = function(x) {
	console.log(x);
}

