/* Dairesel Referansları Engellemek

Basit dairesel referanslarda özelliğin ismi verilip seri hale getirilirken görmezden gelme işlemi yapılabilir.

Fakat bazen çok fazla dairesel referans olabilir. Ayrıca isimleri hem dairesel referanslarda hem de normal özelliklerde kullanılabilir.

degistirici fonksiyonu ile her şeyi karaktere çevirin, fakat tanisma'ya referans veren özellikleri silin: */

let oda1 = {
    sayi: 23
};

let tanisma1 = {
    baslik: "Konferans",
    dolduruldu: [{ adi: "Nurcan" }, { adi: "Erdinç" }],
    yer: oda1
};


// dairesel referanslar
oda1.dolduruldu = tanisma1;
tanisma1.self = tanisma1;

console.log(JSON.stringify(meetup, function degistirici(key, value) {

    /* Kodunuz */
}));

/* Sonuç şu şekilde olmalıdır:
{
  "baslik":"Konferans",
  "dolduruldu":[{"adi":"Nurcan"},{"adi":"Erdinç"}],
  "yer":{"sayi":23}
}
*/

// çözüm

let oda = {
    sayi: 23
};

let tanisma = {
    baslik: "Konferans",
    dolduruldu: [{ adi: "Nurcan" }, { adi: "Erdinç" }],
    yer: oda
};

oda.dolduruldu = tanisma;
tanisma.self = tanisma;

console.log(JSON.stringify(tanisma, function degistirici(anahtar, deger) {

    return (anahtar != "" && deger == tanisma) ? undefined : deger;
}));
// {"baslik":"Konferans","dolduruldu":[{"adi":"Nurcan"},{"adi":"Erdinç"}],"yer":{"sayi":23}}

// Burada anahtar =="" kontrolü de yapılmalı çünkü ilk çağrıda deger==tanisma'dır, ve anahtar boş gelir.