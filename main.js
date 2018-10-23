

/* ロード時 */
window.onload = function() {
	//カードをセット	
	e = new Array(8);
	for(var cNum = 0; cNum < e.length; cNum++) {
		e[cNum] = document.createElement('img');
		var mRan = Math.floor(Math.random() * 12);
		var cRan = Math.floor(Math.random() * 4);
		e[cNum].id = cards[mRan][1][cRan]; // 月ごとに種類分け
		e[cNum].src = cards[mRan][1][cRan];	// 画像を指定
	}
	for(var key in e) {
		(function(key_) {
			e[key_].addEventListener('click', function() {
				 document.getElementById('fMy').appendChild(e[key_]);
				 var month = ['matu', 'kiri'];
				 var c = e[key_].src;
				 for(var m in month) {
				 	var matchMonth = c.indexOf(month[m]);
				 	if(matchMonth !== -1) {
				 	 	console.log('ok');
					}else{
						console.log('no');
					}
				}
				// childNodes で順番を表示
				var a = document.getElementById('fMy').childNodes;
				for(var i = 0; i < a.length; i++) {
					var matchMonth = c.indexOf(a[i+1]);
					if(matchMonth !== -1) {
						console.log('ok');
					}else{
						console.log('no');
					}
				}
			}, false);
			document.getElementById('fYou').appendChild(e[key_]);
		}(key));
	}
	
	return;
};
