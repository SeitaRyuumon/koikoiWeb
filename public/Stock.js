

'use strict';


const Stock = {
	cards : Card,
	nextPos : 'field',
	deal : function(pos) {
		let e = this.cards.create();
		e = this.move(e);
		this.render(e, pos);
	},
	deals : function(pos, num) {
		for(let i = 0; i < num; i++) {
			// 札をHTML上に描画する
			let e = this.cards.create();
			e = this.move(e);
			this.render(e, pos);
		}
	},
	render : function(e, pos) {
		document.getElementById(pos).appendChild(e);
	},
	move : function(e) {
		e.addEventListener('click', function() {
			document.getElementById(Stock.nextPos).appendChild(e);
		}, {once : true});
		return e;
	},
	
}
