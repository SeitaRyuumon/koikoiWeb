

'use strict';


const Stock = {
	cards : Card,
	deal : function(pos) {
		this.toUpdate(this.cards.create(), pos);
	},
	deals : function(pos, num) {
		for(let i = 0; i < num; i++) {
			this.toUpdate(this.cards.create(), pos);
		}
	},
	toUpdate : function(e, pos) {
		document.getElementById(pos).appendChild(e);
	},


		/*
		let vals = [];
		for(let i = 0; i < num; i++) {
			vals.push(this.cards.create());
		}
		return vals;
	},
	*/
}