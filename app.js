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

alert('1から10まで足し算した結果は' + num + 'です。'); */


// <変数宣言について>
// ・JavaScriptの変数宣言は3種類ある。
// 【var】【let】【const】
// 　　→【var】を使う場面はほとんどない
// 　　→constは慣例的にすべて大文字とすることもあるが、小文字でも宣言できる。


// <再宣言>
// ・一度、宣言した変数名で再度、変数宣言を行うことを再宣言という。

// varによる再宣言
/* var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname) */
// デベロッパツール（検証ツール）の、console.logを使用するとConsoleタブの中に値が展開される。
// 　　→varでの再宣言は問題ない。

// letによる再宣言
/* let nickname = "taro"
console.log(nickname)
let nickname = "ichiro"
console.log(nickname) */
// デベロッパツール（検証ツール）の、console.logを使用するとConsoleタブの中に値が展開される。
// 　　→「Uncaught SyntaxError: Identifier 'nickname' has already been declared」（'nickname'という変数は既に宣言されている）と、エラーが出る。
// 　　→letでは再宣言できない。

// constによる再宣言
/* const nickname = "taro"
console.log(nickname)
const nickname = "ichiro"
console.log(nickname) */
// デベロッパツール（検証ツール）の、console.logを使用するとConsoleタブの中に値が展開される。
// 　　→letの時と同様のエラーが出た。
// 　　→constの場合でも再宣言はできない。


// <再代入>
// ・変数に値を代入した後で、別の値を代入することを再代入と言う。
// ・再代入はvarとletで、可能。constでは再代入できない。

// varによる再代入
/* var nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname) */
// デベロッパツール（検証ツール）の、console.logを使用するとConsoleタブの中に値が展開される。
// 　　→4行目でnickname = "jiro"と再代入を行っていて、5行目でconsoleへ出力している。
// 　　→再代入が反映されていることが確認できた。

// letによる再代入
/* let nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname) */
// デベロッパツール（検証ツール）の、console.logを使用するとConsoleタブの中に値が展開される。
// 　　→varと同様の結果が確認できた。

// constによる再代入
/* const nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname) */
// デベロッパツール（検証ツール）の、console.logを使用するとConsoleタブの中に値が展開される。
// 　　→「Uncaught TypeError: Assignment to constant variable. at sample.js:4」というエラーが確認できた。
// 　　　エラーの内容は定数とした変数には割り当てできないというもの。
// 　　→constでは再宣言と再代入ができない。


// <スコープ>
// ・変数にはスコープ（有効範囲）というものがあり、定義した変数の有効範囲になる。
// ・グローバルスコープとローカルスコープが存在する。
// 　　→ローカルスコープには、「関数スコープ」と「ブロックスコープ」が存在する。
// <varのスコープ>
// 　→varでは関数スコープ（ローカルスコープ）、グローバルスコープの変数を宣言できる。
// 　 グローバルスコープはどこからでも参照できる変数。
// 　 関数スコープは関数の中でvarによって宣言された変数。関数スコープの有効範囲は関数内になる。
/* var str = "webcamp" //グローバルスコープ

function foo() {
  console.log(str)
  var y = "hello" //関数スコープ
}

foo()
console.log(y) */
// デベロッパツール（検証ツール）の、console.logを使用するとConsoleタブの中に値が展開される。
// 　　→10行目のconsole.log(y)で「Uncaught ReferenceError: y is not defined」というエラーが発生。
// 　　→yという定義がされていない。という参照エラー。
// ・yはfooという関数の中でvarによって宣言された関数スコープになる。
// 　　→関数の外からyを参照しようとしても有効範囲外となりエラーとなる。


// <letのスコープ>
// 　→letではブロックスコープ（ローカルスコープ）の変数を宣言することができる。
// ・ブロックとは（）、｛｝の組で区切られたものを指す。
/* function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x)
  console.log(y)
}

foo() */
// デベロッパツール（検証ツール）の、console.logを使用するとConsoleタブの中に値が展開される。
// 　　→7行目で「Uncaught ReferenceError: y is not defined」と、参照エラーが起きている。
// ・yという変数は3~5行目の{ }のブロック内でletによって宣言されたもの。
// 　ブロック外から参照したためエラーになった。
/* for (let i = 0; i < 10; i++) {
  console.log(i)
}

console.log(i) */
// に変更すると…
// 　　→5行目で「Uncaught ReferenceError: i is not defined」と、参照エラーが起きている。
// ・iという変数はfor句の（）ブロック内でletによって宣言されたもの。
// 　ブロック外から参照したためエラーになった。
// 　letによる変数宣言では宣言されたブロック内が有効範囲となる。


// <constのスコープ>
// 　→constのスコープはletと同じブロックスコープになる。


// <<一覧表>>
/* 　　　　　【var】　　【let】　　【const】
【再宣言】　　　〇　　　　　✕　　　　　✕
【再代入】　　　〇　　　　　〇　　　　　✕　
【スコープ】　　関数　　　ブロック　　ブロック */


// <巻き上げ>
// 　→JavaScripには変数の巻き上げ（ホイスティング）がある。

/* var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo() */
// デベロッパツール（検証ツール）の、console.logを使用するとConsoleタブの中に値が展開される。
// 　　→最初のconsole.logで、「undefined」が出力されている。
// 　・何故か…　
// 　　1行目はグローバルスコープのstrという変数に「webcamp」を格納してる。
// 　　グローバルスコープはどこからでも参照できる有効範囲を持っているので、初めのconsole.log(str)では「webcamp」と出力されるはず…
// 　　しかし、「undefined」が出力されている。
// 　　　→この現象の裏には変数の巻き上げが隠れている。
/* var str = "webcamp"

function foo() {
  var str
  console.log(str)
  str = "dmm webcamp"
  console.log(str)
}

foo() */
// ↑このコードは、さっきのコードと同様の内容になっている。
// 　→関数に冒頭にvar strがある。
// 　 さっきのコードでは5行目にvar str = "dmm webcamp"とあったが、内部的にはvar strの変数宣言の部分が巻き上げられる。

// ・変数の巻き上げとは関数内のどの部分で変数を宣言したとしても、関数冒頭で変数を宣言したことになる。
// ・今回の場合、グローバルスコープのstrという変数と、関数スコープのstrという同名の変数が存在するが、console.log(str)が関数内で使用されているため、関数スコープのstrが参照される。
// 　→初めのconsole.logで参照されたstrは、宣言されたのみの変数で値は代入されていない。　結果、「undefined」と出力される。
// 　 （厳密には、varによって宣言された変数に初期値を入れない場合には自動的にundefinedを初期値として代入する。）
// ・letやconstの場合も同様に変数の巻き上げが起こる。
// 　しかし…
// 　letやconstでは変数の初期化を行わずに、宣言のみした場合、それを参照すると「Uncaught ReferenceError: Cannot access '変数名' before initialization」という エラー になる。