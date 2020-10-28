// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 11
let btn_q11 = document.querySelector('.q11-btn');
btn_q11.addEventListener('click',function(){
	let input_q11 = document.querySelector('#q11-input-name');
	let input_q11_2 = document.querySelector('#q11-input-age');
	let result_q11 = document.querySelector('#q11-result-name');
	let result_q11_2 = document.querySelector('#q11-result-age');

// 20歳未満の方の利用は禁止です。
if (input_q11_2.value <20)
	{
	result_q11_2.textContent = '20歳未満の方の利用は禁止です。';
	}
else{
	result_q11_2.textContent = input_q11_2.value;
	}


// 名前が空欄の場合には、「名前が空欄です」と赤文字で表示。
if (input_q11.value === '')
	{
	result_q11.textContent = '名前が空欄です。';
	result_q11.style.color = 'red';
	}
else{
	result_q11.textContent = input_q11.value;
	result_q11.style.color = 'black';
	}

});


// Q 12
let btn_q12 = document.querySelector('.q12-btn');
btn_q12.addEventListener('click',function(){
	var parent_text = document.querySelector('.q12-result');
	var child_p_for_btn = document.createElement('p');
	child_p_for_btn.textContent = document.querySelector('.q12-btn').textContent;

	console.log(parent_text)
	parent_text.appendChild(child_p_for_btn);

});


// --------------回答--------------
// let btn_q12 = document.querySelector('.q12-btn');
// btn_q12.addEventListener('click',function(){

// // ボタンの文字を取得
// let btn_text = tihs.textContent;
// console.log(btn_text);

// // 追加するpタグを作成
// let add_p = document.createElement('p');
// //add_pには<p></p>が入っている

// // 作成したpタグにボタンの文字を設定
// add_p.textContent = btn_text;
// // add_pには<p>Google</p>に設定された

// // div id=q12-resultにpタグを追加して表示
// // 変数に代入せずにどんどんつなげていくパターン
// // document.querySelector('q12-result').appendChild(add_p);

// // 変数に一回代入してから。更に指定するパターン
// let q12_result = document.querySelector('.q12-result');
// q12_result.appendChild(app_p);


// });

// console.log (child_p)

// Q 13
// 飛ばしていいです。
let btn_q13 = document.querySelector('.q13-btn');
btn_q13.addEventListener('click',function(){
	var parent_text = document.querySelector('#q13-box');
// 新しく追加予定のpタグを生成
	var child_p_for_btn = document.createElement('li');
	child_p_for_btn.textContent = 'りんご';
// 新しく生成したpタグを、親要素に追加
	parent_text.appendChild(child_p_for_btn);
	parent_text.setAttribute("li","child-l1"); 
// 親要素（div）への参照を取得
	var parent_text = document.getElementById("q13-box");
// 指定した要素の手前にタグを追加する方法
	parent_text.insertBefore(child_p_for_btn, parent_text.firstChild);
});


// --------------回答--------------
// let btn_q13 = document.querySelector('.q13-btn');
// btn_q13.addEventListener('click',function(){
// 	// 追加したい親要素をシ取得
// 	let q13_box = document.querySelector('#q13_box');

// 	// 親要素の中の先頭の子を指定
// 	let firstChild = q13_box.firstElementchaild;
// console.log(firstChild);

// // 追加したい要素を作成
// let add_child = document.createElement('li');

// // 新しく追加予定のpタグを生成
// 	add_child.textContent = 'りんご';
// 	// add_child は<li>りんご</li>

// // 先頭の子要素の手前に。追加したい要素を挿入
// 	q13_box.insertBefore(add_child,firstChild);
// });


// Q 14
let btn_q14 = document.querySelector('.q14-btn');
btn_q14.addEventListener('click',function(){
	let chicken = document.querySelector('#chicken');
	chicken.remove();
});


// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。

// 下記もok..

// let btn_q15 = document.querySelector('.q15-btn');
// for (i=0;i < q15_btn.length;i++){
// 	let btn_q15_each = btn_q15[i];
// 	btn_q15_each.addEventListener('click',function(){

// 	});

// }
// btn_q15には要素が３つある配列が入っている
for (btn_q15_each of btn_q15){
	// btn_q15_eachは配列btn_q15から一つ取り出したボタンの情報が代入されている
	btn_q15_each.addEventListener('click',function(){

// Googleボタンを押された時も実行される
// YouTubeボタンを押された時も実行される
// Amazonボタンを押された時も実行される


// 追加したい親要素を取得
let q15_link_list = document.querySelector('.q15-link-list');

// 追加したいaタグを生成
let add_a = document.createElement('a');

// add_aは、<a></a>   add_aの変数名は何でもOK


	if (this.textContent == 'Google'){
	// Googleボタン押した時
	// <a href="https://google.com">google</a>　を作って、div q15-link-listに追加
	add_a.href = 'https://google.com/';
	add_a.textContent = this.textContent;
	// add_a <a href="https://google.com">google</a>
	}

	if (this.textContent == 'YouTube'){
	// YouTubeボタン押した時
	add_a.href = 'https://youtube.com/';
	add_a.textContent = this.textContent;
	// add_a <a href="https://youtube.com">youtube</a>
	}


	if (this.textContent == 'Amazon'){
	// Amazonボタン押した時
	add_a.href = 'https://amazon.com/';
	add_a.textContent = this.textContent;
	// add_a <a href="https://amazon.com">amazon</a>
	}

// 親要素に作成したタグの追加
q15_link_list.appendChild(add_a);


});

}
