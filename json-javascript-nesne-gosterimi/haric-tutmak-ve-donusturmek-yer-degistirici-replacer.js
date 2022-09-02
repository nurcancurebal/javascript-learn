/* -> JSON.stringfy'ın tam yazımı:

let json = JSON.stringify(deger[, degistirici, bosluk])

-> deger
Kodlanacak metin.

-> degistirici
Maplema ( haritalama ) fonksiyonu ( function(key,value)) veya kodlanacak özelliklerin dizisi.

-> boşluk
Formatlanmak için kullanılacak boşluk.

Çoğu zaman JSON.stringify'ın sadece ilk argümanı kullanılır. Fakat daha derinlemesine bir değiştirici işlemi yapmak istiyorsanız. Örneğin dairesel referansı filtrelemek gibi, JSON.stringify'ın diğer argümanlarını da kullanabilirsiniz.

Eğer üçüncü parametreyi de gönderirseniz, sadece gönderdiğiniz özellikler kodlanacaktır.

Örneğin: */

let oda1 = {
    sayi: 23
};

let tanisma1 = {
    baslik: "Konferans",
    katilimcilar: [{ adi: "Ahmet" }, { adi: "Mehmet" }],
    yer: oda1 // tanışma1 oda1 i referans gösteriyor.
};

oda1.dolduruldu = tanisma1; // oda1 tanışma1 i referans gösteriyor.

console.log(JSON.stringify(tanisma1, ['baslik', 'katilimcilar']));
// {"baslik":"Konferans","katilimcilar":[{},{}]}

/* Burada çok sıkı kullandık. Özellik listesi tüm yapı için kullanıldı. Bundan dolayı katılımcılar boş döndü, adi alanı da istenseydi bu durumda değer gelecekti.

Dairesel referansa neden olabilecek oda.dolduruldu hariç hepsini içermek isterseniz: */

let oda2 = {
    sayi: 23
};

let tanisma2 = {
    baslik: "Konferans",
    katilimcilar: [{ adi: "Ahmet" }, { adi: "Mehmet" }],
    yer: oda2 // tanışma oda2yi referans gösteriyor.
};

oda2.dolduruldu = tanisma2; // oda2 tanışmayı referans gösteriyor.

console.log(JSON.stringify(tanisma2, ['baslik', 'katilimcilar', 'yer', 'adi', 'sayi']));

//{"baslik":"Konferans","katilimcilar":[{"adi":"Ahmet"},{"adi":"Mehmet"}],"yer":{"sayi":23}}


/* Şimdi ise dolduruldu hariç her yer seri haline getirildi. Fakat özelliklerin listesi oldukça büyük oldu.

Neyseki degistirici yerine fonksiyon kullanılabilir.

Bu fonksiyon her (anahtar, deger) ikilisi için çağırılabilir ve “değiştirilmiş” değeri çevirir, bu da orjinalinin yerine geçer.

Daha önce yaptığımız örnekte dolduruldu özelliği hariç diğer özelliklerin deger'in olduğu gibi kullanılabilir. dolduruldu özelliğini pas geçmek için aşağıdaki kod undefined döndürür. */

let oda3 = {
    sayi: 23
};

let tanisma3 = {
    baslik: "Konferans",
    katilimcilar: [{ adi: "Ahmet" }, { adi: "Mehmet" }],
    yer: oda3 // tanışma3 oda3ü referans gösteriyor.
};

oda3.dolduruldu = tanisma3; // oda3 tanışma3 ü referans gösteriyor

console.log(JSON.stringify(tanisma3, function degistirici(anahtar, deger) {

    console.log(`${anahtar}: ${deger}`); // degistiriciye gelen

    return (anahtar == 'dolduruldu') ? undefined : deger;
}));

/*
:             [object Object]
baslik:        Konferans
katilimcilar:    [object Object],[object Object]
0:            [object Object]
adi:         Ahmet
1:            [object Object]
adi:         Mehmet
yer:        [object Object]
sayi:       23
dolduruldu: [object Object]
{"baslik":"Konferans","katilimcilar":[{"adi":"Ahmet"},{"adi":"Mehmet"}],"yer":{"sayi":23}}
*/

/* degistirici fonksiyonu içiçe objeler ve diziler dahil her şeyi alır. Tüm objelere yinelemeli olarak uygulanır. this'in değeri degistirici içerisinde o anki özellikleri tutar.

İlk çağrı özeldir. “Sarıcı obje” vasıtasıyla: {"": tanisma}. Diğer bir deyişle ilk (anahtar, deger) çifti boş anahtar ile gelir ve değeri hedef objenin tamamıdır. Bundan dolayı yukarıdaki örnekte ilk satır: ":[object Object]"'dir.

Fikir degistirici'yi olabildiğince güçlü yapmaktır: Böylece gelen tüm objeyi pas geçme veya analiz etme gibi imkanlar sağlanır. */