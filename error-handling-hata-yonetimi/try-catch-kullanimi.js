/* -> try..catch kullanımı
Gerçek hayatta try..catch'ın nasıl kullanılabileceğine bakalım.

Bildiğiniz gibi, JavaScript JSON.parse(str) metodu sayesinde JSON olarak tanımlanmış değerlerin okunmasına olanak tanır.

Genelde ağ üzerinden başka bir serverdan veya kaynaktan gelen verinin okunmasında kullanılır.

Bu veriyi aldıktan sonra JSON.parse ile şu şekilde okuyabiliriz: */

let json = '{"name":"John", "age": 30}'; // sunucudan gelen veri.

let user = JSON.parse(json); // bu veriyi JS objesine dönüştür.

//Artık user karakter dizisinden oluşan objelere sahiptir.
console.log(user); // { name: 'John', age: 30 }

/* ~ Eğer json düzgün gelmiyorsa JSON.parse hata üretir ve kod anında “ölür”.

Bunun ile yetinmeli miyiz? Elbette hayır

Bu şekliyle eğer gelen veride bir hata varsa ziyaretçi nerede yanlış olduğunu bilemeyecektir. İnsanlar hata olduğunda herhangi bir hata mesajı almadan öylece ölen bir şeyden nefret ederler.

Bunun çözümü için try..catch kullanılabilir: */

let json2 = "{ bad json }";

try {

    let user = JSON.parse(json2); // <-- bir hata oluştuğunda...

    console.log(user.name); // çalışmıyor

} catch (e) {

    // ...çalışma buradan devam eder.
    console.log("Kusura bakmayın, veride hata var.Talep tekrar yapacaktır"); // Kusura bakmayın, veride hata var.Talep tekrar yapacaktır
    console.log(e.name); // SyntaxError
    console.log(e.message); // Unexpected token b in JSON at position 2
}

/* Burada catch bloğu sadece mesajı göstermek için kullanılmıştır. Fakat burada ağ talebi, kullanıcıya başka bir yöntem sunma, loglama için hata loginin tutulması gibi işlemler yapılabilir. */