

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
	
	init : function() {
		
	},
	render : function() {
		
	},
	create : function() {
	
	},
	
	move : function() {
		
	},
	
	
	disp : function(e, pos) {
		if(Array.isArray(e)) {
			for(const key in e) {
				this.move(e[key], 'field');
				document.getElementById(pos).appendChild(e[key]);
			}
		} else {
			this.move(e, 'field');
			document.getElementById(pos).appendChild(e);
		}
	*/
}


