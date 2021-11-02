// <確認問題>
// 足し算、引き算、掛け算、割り算の計算式と結果を、アラートウィンドウに表示してください。
alert('4+3は' + (4 + 3) + '、8-5は' + (8 - 5) + '、2*6は' + (2 * 6) + '、10/2は' + (10 / 2));


// <初期記述>
// alert('Hello World');


// ・変数の書き方
// JavaScriptでは、変数名の前にletを付けることで、変数を宣言できる。
// let 変数名 = 内容 ;　→　letの後ろに変数名と内容（初期値）を書く。


// <変数化>
// let hello = 'Hello World';
// alert(hello);


/* ・変数に代入できるコードの例
 整数を代入する
 let int1 = 1;

 負数を代入する
 let int2 = -10;

 小数点を代入する
 let float1 = 3.14;

 文字列を代入する
 let str1 = 'JavaScriptを覚えよう'; */


/* ・四則演算の書き方
足し算
alert(4 + 3);

引き算
alert(8 - 5);

掛け算
alert(2 * 6);

割り算
alert(10 / 2); */


// <文字列結合化>
// alert('Hello' + 'World');
// 変数を利用する場合には、それぞれの文字列を変数に格納して結合させる。
// 　　↓
// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);


/* ・条件分岐
条件式が1つの場合
if(条件1){
　処理1
}
→条件1を満たすときは、処理1を実行。

・1つの条件式で、処理を2つに分ける場合
if(条件1){
   処理1
}else{
   処理2
}
→条件1を満たすときは処理1、満たさないときは処理2を実行。

・2つの条件式で処理を分ける場合
if(条件1){
  処理1
}else if(条件2){
  処理2
}else{
  処理3
}
→条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行。 */


// <条件分岐化>
// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// }else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// }else{
//   alert('みかんの値段がりんごより高い');
// }


// ・繰り返し処理
// JavaScriptで繰り返し処理を行うには、「while文」と「for文」の2つの方法がある。
// While文は、条件式が真（true）ならば制限なく繰り返し,for文は、決められた回数だけ繰り返す。

// ・while文
// 「while文」では、条件式が真（true）である間は繰り返し処理が実行される。繰り返される回数は決まっていない。
// while(条件){
//   処理
// }

// <繰り返し処理(while)>
/* let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です'); */

// ・do...while文
// do...while文では、条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われる。
// その後、条件式を評価して、繰り返し処理を続けるか／抜けるかを決めていく。
// do{
//  最低1回は行われる処理
// }while(条件式);

// ・for文
// 「for文」は、決められた回数の処理を繰り返すときに使う。
// for文を書くときは、「繰り返す回数」を初期値で設定する、「条件を満たす場合の処理」を記述するようにする。
// for文は、「10回まで繰り返し」などのように、決められた回数内で繰り返し処理を行いたい場合に使われる。
// for ( 初期値; 条件式; 増減値 ){
//   繰り返し処理
// }

// <繰り返し処理(for)>
/* let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です'); */