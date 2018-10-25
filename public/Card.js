

'use strict';


const Card = {
	url : [
		"01.png",
		"02.png",
		"03.png",
		"04.png",
		"05.png",
		"06.png",
	],
	
	init : function() {
		
	},
	create : function() {
		let r = this.random(6);
		let e 	= document.createElement('img');
		e.src 	= this.url[r];
		e.id 	= r + 1;
		return e;
	},
	random : function(seed) {
		return Math.floor(Math.random()*seed);
	},
	render : function(e, pos) {
		document.getElementById(pos).appendChild(e);
	},
	
	move : function(e, nextPos) {
		e.addEventListener('click', function() {
			document.getElementById(nextPos).appendChild(e);
		}, {once : true});
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
	*/
};