

'use strict';

function 
const Card = {
	url : [
		"images/01.png",
		"images/02.png",
		"images/03.png",
		"images/04.png",
		"images/05.png",
		"images/06.png",
	],
	create : function() {
		let r = this.random(6);
		let e 	= document.createElement('img');
		e.src 	= this.url[r];
		e.id 	= r + 1;
		return e;
	},
	move : function(e, pos) {
		e.addEventListener('click', function() {
			document.getElementById(pos).appendChild(e);
		}, {once : true});
	},
	random : function(seed) {
		return Math.floor(Math.random()*seed);
	},
	toUpdate : function(e, pos) {
		//  画面の更新処理
		document.getElementById(pos).appendChild(e);
	},
	/*
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
	},
	*/
};