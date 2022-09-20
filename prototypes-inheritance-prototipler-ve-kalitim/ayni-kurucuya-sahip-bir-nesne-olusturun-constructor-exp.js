/* Bir yapıcı fonksiyon tarafından yaratılan rastgele bir nesnemiz olduğunu hayal edin - hangisini bilmiyoruz, ancak onu kullanarak yeni bir nesne oluşturmak istiyoruz.

Böyle yapabilir miyiz? */

// let obj2 = new obj.constructor();

// Bu tür kodun doğru çalışmasına izin veren obj için bir yapıcı işlev örneği verin. Ve onu yanlış yapan bir örnek.

// Çözüm

/* "constructor" özelliğinin doğru değere sahip olduğundan eminsek bu yaklaşımı kullanabiliriz.

Örneğin, varsayılan "prototip"e dokunmazsak, bu kod kesin olarak çalışır: */

function User1(name) {

    this.name = name;
}

let user1 = new User1('John');
let user2 = new user1.constructor('Pete');

console.log(user2.name); // Pete (worked!)

console.log(user1.name); // john

/* Çalıştı, çünkü User1.prototype.constructor == Kullanıcı.

Ama eğer birisi, deyim yerindeyse, User1.prototype'ın üzerine yazar ve "constructor"ı yeniden yaratmayı unutursa, o zaman başarısız olur.
  
Örneğin: */

function User3(name) {

    this.name = name;
}
User3.prototype = {}; // (*)

let user3 = new User3('John');

let user4 = new user3.constructor('Pete');

console.log(user3.name); // John
console.log(user4.name); // undefined


/* user4.name neden tanımsız?

new user3.constructor('Pete') şu şekilde çalışır:

1. İlk olarak, kullanıcıda yapıcıyı arar. Hiçbir şey yok. 

2. Daha sonra prototip zincirini takip eder. Kullanıcının prototipi User3.prototype'dir ve ayrıca hiçbir şeyi yoktur.

3. User3.prototype'ın değeri düz bir nesnedir {}, prototipi Object.prototype'dir. Ve Object.prototype.constructor == Object var. Yani kullanılır.

Sonunda user4 = new Object('Pete') sağladık. Yerleşik Object yapıcısı argümanları yok sayar, her zaman boş bir nesne oluşturur - sonuçta user4'de sahip olduğumuz şey budur. */