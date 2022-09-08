// “length” adında ayrı bir özellik daha bulunmaktadır. Bu özellik fonksiyon parametrelerinin sayısını döndürür:

function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

/* Gördüğünüz gibi geriye kalan parametresi ... sayılmamaktadır.

length özelliği bazen diğer fonksiyonların üzerinde çalışan fonksiyonlara bir iç bakış oluşturur.

Mesela, aşağıdaki kodda sor fonksiyonu soru parametresi alır ve belirli olmayan sayıda isleyici fonksiyonunu çağırır.

Kullanıcı cevap verdiğinde isleyici(handler) çağırılır. İki türlü işleyici gönderilebilir:

Argümansız fonksiyon, sadece pozitif cevaplarda çağırılır.
Argümanlı fonksiyonlar, cevap alınan her durumda çağırılır.
Mantık şu şekildedir; cevap pozitif olduğunda argüman almayan isleyici calisir, fakat evrensel isleyiciye de izin verir.

isleyici'lerin doğru çalışması için, length özelliğinden faydalanılabilir. */

function sor(soru, ...isleyiciler) { // soru = "Soru?" içinde bu var

    let dogruMu = soru;

    for (let isleyici of isleyiciler) { // isleyiciler = () => console.log('Evet dedin') , sonuc => console.log(sonuc)

        if (isleyici.length == 0) { //! () => console.log('Evet dedin').lenght = 0 name olmadığı için length 0 aldı

            if (dogruMu) isleyici();

        } else {

            isleyici(dogruMu);
        }
    }
}

// Olumlu cevap için, her ikisi çalışırken
// Olumsuz cevap için sadece ikincisi çalışmaktadır.
sor("Soru?", () => console.log('Evet dedin'), sonuc => console.log(sonuc));
// Evet dedin
// Soru?

/* Bu duruma polymorphism denilmektedir. Bu argümanlara tiplerine göre farklı davranma olayıdır. Bu bizim durumumuzda length'e bağlıdır. Bu fikir JavaScript kütüphanelerinde de kullanılmaktadır. */