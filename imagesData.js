/*
 * index.html
 */

 
'use strict';


// 各月の札：配列形式
let cards = [
	[ 1, ['images/matuKasu1.png', 'images/matuKasu2.png', 'images/matuHuda.png', 'images/matuTuru.png'] ], //１月
	[ 2, ['images/umeKasu1.png', 'images/umeKasu2.png', 'images/umeHuda.png', 'images/umeUguisu.png',] ] ,//２月
	[ 3, ['images/sakuraKasu1.png', 'images/sakuraKasu2.png', 'images/sakuraHuda.png', 'images/sakuraMaku.png',] ], //３月
	[ 4, ['images/hujiKasu1.png', 'images/hujiKasu2.png', 'images/hujiHuda.png', 'images/hujiHototogisu.png'] ], //４月
	[ 5, ['images/ayameKasu1.png', 'images/ayameKasu2.png', 'images/ayameHuda.png', 'images/ayameYatuhasi.png'] ], //５月
 	[ 6, ['images/botanKasu1.png', 'images/botanKasu2.png', 'images/botanHuda.png', 'images/botanTyou.png'] ], //６月
	[ 7, ['images/hagiKasu1.png', 'images/hagiKasu2.png', 'images/hagiHuda.png', 'images/hagiInosisi.png'] ], //７月
	[ 8, ['images/susukiKasu1.png', 'images/susukiKasu2.png', 'images/susukiKari.png', 'images/susukiTuki.png'] ], //８月
	[ 9, ['images/kikuKasu1.png', 'images/kikuKasu2.png', 'images/kikuHuda.png', 'images/kikuSakazuki.png'] ], //９月
	[ 10, ['images/momijiKasu1.png', 'images/momijiKasu2.png', 'images/momijiHuda.png', 'images/momijiSika.png'] ], //１０月
	[ 11, ['images/yanagiKasu.png', 'images/yanagiHuda.png', 'images/yanagiTubame.png', 'images/yanagiOno.png'] ], //１１月
	[ 12, ['images/kiriKasu1.png', 'images/kiriKasu2.png', 'images/kiriKasu3.png', 'images/kiriHouou.png'] ], //１２月
];

// 各月の名前
month = ['matu', 'ume', 'sakura', 'huji', 'ayame', 'botan', 'hagi', 'susuki', 'kiku', 'momiji', 'yanagi', 'kiri'];

// 各月の各月の札：JSON形式
/*
cards = {
	'Jan': {
		'name': 'matu',
		'card1': {
			'name': 'matuKasu1',
			'type': 1
		},
		'card2': {
			'name': 'matuKasu1',
			'type': 1
		},
		'card3': {
			'name': 'matuKasu1',
			'type': 1
		},
		'card4': {
			'name': 'matuKasu1',
			'type': 1
		},
	},
}
*/
