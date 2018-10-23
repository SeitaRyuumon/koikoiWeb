

'use strict';


let Deck = {
	cards : [],
	setCards : function(pos) {
		this.cards = document.getElementById(pos);
	},
	toUpdate : function(e, pos) {
		document.getElementById(pos).appendChild(e);
	},
	/*
	setCards : function(pos) {
		this.cards = document.getElementById(pos);
	},
	toInit : function(pos, num) {
		for(let i = 0; i < num; i++) {
			this.toUpdate
		}
	}
	*/
}


