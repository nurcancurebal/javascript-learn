let kullanici = {

  isim: "Nurcan",

  selamVer: function () { console.log(this.isim) }
}

(kullanici.selamVer)();

// ReferenceError: Başlatmadan önce 'kullanici'ye erişilemiyor , hatası verir

/* Tarayıcıların çoğundaki hata mesajının anlaşılmaz.
The error appears because a semicolon is missing after kullanici = {...}.
JavaScript parantezden önce noktalı virgül koymaz. Bu durumda kod aşağıdaki gibi çalışacaktır:
let kullanici = { selamVer:... }(kullanici.selamVer)()
Bu şekilde çağırıldığında, let kullanici ile çağrı aynı satırda yapılmış olur. Ayrıca bu tanımlanan fonksiyon
(kullanici.selamVer) şeklinde aynı satırda argüman olarak kullanılmıştır. Bundan dolayı da hata oluşmaktadır.
Eğer noktalı virgül koyarsanız her şey beklediğiniz gibi çalışır: */

let kullanici2 = {

  isim: "Erdinç",

  selamVer: function () { console.log(this.isim) }
};

(kullanici2.selamVer)() // Erdinç

// (kullanici.selamVer) etrafındaki parantez bir işe yaramaz. Sadece sıralamayı belirtir. Bu soruda ; önemliydi.