/* Ok fonksiyonlarında “this” bulunmamaktadır.
Ok fonksiyonları özeldir: Kendilerinin this'i bulunmaz. Eğer yine de this kullanırsanız ok fonksiyonu dışındaki bölümü this
olarak alır. 
Örneğin aşağıdaki ok() dışarıda bulunan kullanici.selamVer() metodunu kullanmaktadır:*/

let kullanici = {

    isim: "Nurcan",

    deneme: () => {
        console.log(this.isim); //* undefined
    },

    func() {
        console.log(this.isim); //* Nurcan
    },

    selamVer() {

        console.log(this.isim); //* Nurcan

        let ok = () => {
            console.log(this.isim) //* Nurcan
        };

        ok();
        func();

        function func() {
            console.log(this.isim); //* undefined
        }
    }
};

kullanici.selamVer();
kullanici.func();

/* Bu ok fonksiyonlarının bir özelliğidir. Ayrı bir this kullanmak yerine her zaman bir üstteki bölümden this i alması baya
kullanışlıdır. Ok fonksiyonları bölümü içerisinde bu konu derinlemesine incelenecektir. */