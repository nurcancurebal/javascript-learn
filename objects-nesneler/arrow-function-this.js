/* Ok fonksiyonlarında “this” bulunmamaktadır.
Ok fonksiyonları özeldir: Kendilerinin this'i bulunmaz. Eğer yine de this kullanırsanız ok fonksiyonu dışındaki bölümü this olarak alır. 
Örneğin aşağıdaki ok() dışarıda bulunan kullanici.selamVer() metodunu kullanmaktadır:*/

let kullanici = {
    isim: "Nurcan",
    selamVer() {
        let ok = () => console.log(this.isim);
        ok();
    }
};

kullanici.selamVer(); // Nurcan

/* Bu ok fonksiyonlarının bir özelliğidir. Ayrı bir this kullanmak yerine her zaman bir üstteki bölümden this i alması baya kullanışlıdır. Ok fonksiyonları bölümü içerisinde bu konu derinlemesine incelenecektir. */