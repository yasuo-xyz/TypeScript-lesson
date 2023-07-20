// classを定義してオブジェクトを作成する方法（例）
// クラス名は最初大文字で始めるのが基本らしい
// 糖衣構文？というらしい
// クラスはオブジェクトの設計図（再確認）
class Person {
    // nameフィールド、nameプロパティと言われる、nameの部分はどんな名前でも良い
    name: string;
    // コンストラクタ関数（予約語、メソッド）
    // 何をするものかとゆうと、今回Personとゆう設計図を元にオブジェクトを作成する時に実行される関数になる
    // つまり初期化とかする時、最初の処理をする時に便利な関数
    constructor(initName: string) {
        // thisはクラス内のフィールドを参照する時に使う
        this.name = initName;
    }
    // クラスにメソッドを追加する方法（例）
    // greetingメソッド（第1引数）挨拶をするとゆう意味
    greeting(this: { name: string }) {
        console.log(`Hello! My name is ${this.name}`);
    }
}
// newキーワードを使ってPersonクラスのオブジェクトを作成する事が出来る
const quill = new Person("Quill");
// console.log(quill);
quill.greeting();

// オブジェクト
// 上記のgretingメソッドをそのまま使い回してる感じ
const anotherQuill = {
    // nameを追加している
    name: "anotherQuill",
    // 下記の部分がthisになるがnameがない状態になるのでundefined（エラー）になる
    anotherGreeting: quill.greeting
}
anotherQuill.anotherGreeting();