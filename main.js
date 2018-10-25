<<<<<<< HEAD
/*
 * index.html
 */


// 札の移動（fMy,fYou）
function move(key_) {
	// ToDo
	document.getElementById('fMy').appendChild(e[key_]);

	var c = e[key_].src;
	for(var m in month) {
		var matchMonth = c.indexOf(month[m]); // 各月札 が 場の札 と 手札 があっているかチェックした値

		// 各月札 が 場の札 と 手札 があっているかチェックする
		if(matchMonth !== -1) {
			console.log('ok');
		}else{
			console.log('no');
		}
	}
}
// 札が同じ月か？
function check() {
	//ToDo
}
// イベントmove()の追加（札の移動）
function addEventMove() {

}

// 山札から札を追加
function addCards() {

    // img属性 を追加
    var eCards = document.createElement('img');

    var mRan = Math.floor(Math.random() * 12);

}
=======
>>>>>>> クラスっぽくやってみた


/* ロード時 */
window.onload = function() {
<<<<<<< HEAD
	//カードをセット
	e = new Array(8);
	for(var cNum = 0; cNum < e.length; cNum++) {
	    e[cNum] = document.createElement('img');　// img属性 を追加

		//var mRan = Math.floor(Math.random() * 2); // 月ごとの数字を ランダム で取得
		var mRan = Math.floor(Math.random() * 12); // 月ごとの数字を ランダム で取得
		var cRan = Math.floor(Math.random() * 4); // 月の中の札の種類を ランダム で取得

		e[cNum].id = cards[mRan][1][cRan]; // 月ごとに種類分け
		e[cNum].src = cards[mRan][1][cRan];	// 画像を指定
	}

	// addEventListener クリックしたときに札を移動させる 追加
	for(var key in e) {
		(function(key_) {
			e[key_].addEventListener('click', function() {

			    // fMy の childNodes 取得
			    var eFMyChildNodes = document.getElementById('fMy').childNodes;

                // クリックした札の src を取得
				var c = e[key_].src;

                // childnodes の length を求めて代入
			    var eFCLength = eFMyChildNodes.length;

				for (var eFC = 0; eFC < eFCLength; eFC++) {
				    // eFMyChildNodes の要素を代入
				    var eFCN = eFMyChildNodes[eFC + 1];

				    // undefined かチェック
				    if (eFCN === undefined) {
				        // 選択したエレメントの追加
				        document.getElementById('fMy').appendChild(e[key_]);

                        // 処理を飛ばす
				        continue;
				    }

                    // クリックした札の月を特定する
				    for(var i = 0; i < month.length; i++) {
				        if(eFCN.id.match(month[i])) {
				            var e_month = month[i];
				        }
				    }

                    // 各札をあっているかチェックして代入
				    var matchMonth = c.indexOf(e_month);
				    if (matchMonth !== -1) {

                        // 一致した札の二枚を 持ち札 field に移動
				        document.getElementById('field').appendChild(e[key_]); // クリックした札
				        document.getElementById('field').appendChild(eFCN); // クリックした札

				        // 一旦強制終了して後の処理をしない
				        return;

                    } else {

                        // 最後の要素の時だけエレメントを追加する
				        if(eFCLength == (eFC + 1)){
				            // 選択したエレメントの追加
				            document.getElementById('fMy').appendChild(e[key_]);
				        }

				    }
				}

=======
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
>>>>>>> クラスっぽくやってみた
			}, false);
			document.getElementById('fYou').appendChild(e[key_]);
		}(key));
	}
<<<<<<< HEAD

=======
	
>>>>>>> クラスっぽくやってみた
	return;
};
