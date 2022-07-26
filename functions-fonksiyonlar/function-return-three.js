function sayHello() {

    let msg = 'Hello World';

    return msg // ÖNEMLİ: return msg' yi yazmadan önce çalıştırdığımız zaman undefined değeri veriyor hello değişkeni
    // sayHello functionunun içerisindeki veriyi almıyor yani atama yapamıyoruz return olmadan
    // ÖNEMLİ: return ['merhaba', 'nurcan'] yazarsak çıktıyı array şeklinde ['merhaba', 'nurcan'] verir

};

let hello = sayHello();

console.log(hello);