// Virgül operatörü , nadir ve en alışılmadık operatörlerden birisidir. Bazen daha kısa kodlar yazmak için kullanılır.
// Virgül operatörü birden fazla ifadeyi virgül , ile ayırarak hesaplamamıza olanak sağlar. Her bir ifade işleme alınır
// fakat bu ifadelerden sadece sonuncusu döndürülür.

let a = (1 + 2, 3 + 4);

console.log(a); // 7 (3 + 4 işleminin sonucu)

// Burada, ilk ifade olan 1 + 2 işleme giriyor fakat sonucu çöpe atılıyor. Sonrasında gelen 3 + 4 işleme giriyor ve sonuç
// olarak geri döndürülüyor.

// Virgül operatörünün önceliği çok düşüktür. Unutmamak gerekir ki; virgül operatörü çok düşük bir önceliğe sahiptir,
// önceliği ='den bile daha düşüktür. Bu yüzden yukarıdaki örnekte gördüğümüz gibi parantezler çok önemlidir. Parantezler
// olmadan: a = 1 + 2, 3 + 4 ifadesinde önce + işleme alınır, değerler toplanarak a = 3, 7 ifadesine çevirilir, ondan sonra
// atama operatörü = ile a = 7 ataması yapılır, ve sonuç olarak virgülden önceki sayı olan 3 işlenmeyerek yok sayılır. Peki
// neden son kısım hariç her şeyi yok sayan bir operatöre ihtiyacımız var? Bazen bizler; bir satırda birkaç işlem yapılan
// karmaşık yapılarda bu operatörü kullanırız.


// Bir satırda 3 farklı işlem

for (a = 1, b = 3, c = a * b; a < 10; a++) {

    console.log(a, b, c);

};

// 1 3 3
// 2 3 3
// 3 3 3
// 4 3 3
// 5 3 3
// 6 3 3
// 7 3 3
// 8 3 3
// 9 3 3

// Bu tarz numaralar birçok JavaScript frameworklerinde kullanılır. Bu yüzden bunlardan bahsettik. Ama genelde bunlar kodun
// okunabilirliğini azaltıyorlar. Bu yüzden kullanmadan önce iyi düşünmek gerekir.