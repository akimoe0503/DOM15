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
	result_q11_2.textContent = '20歳未満の方の利用は禁止です。';}
if (input_q11.value === '')
	{
	result_q11.textContent = '名前が空欄です。';
	result_q11.style.color = 'red';}
else{
	result_q11.textContent = input_q11.value;
	result_q11_2.textContent = input_q11_2.value;
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

// let btn_q15 = document.querySelector('.q15-btn');
// btn_q15.addEventListener('click',function(){
// 	let input_q15 = document.querySelector('.q15-link-list');

// 	console.log(input_q15);
// 	if (input_q15.)
// })


