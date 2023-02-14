/* Ok fonksiyonlarında “this” bulunmamaktadır. Eğer yine de this kullanırsanız ok fonksiyonu dışındaki bölümü this
olarak alır. 
Örneğin aşağıdaki ok() dışarıda bulunan kullanici.selamVer() metodunu kullanmaktadır:*/

let kullanici = {

    isim: "Nurcan",

    deneme: () => {
        console.log(this.isim); //* undefined , çünkü arrow function diğer fonksiyonlar gibi önceden okunmuyor kullanici objesi ile aynı anda çalışıyor.
    },

    func() {
        console.log(this.isim); //* Nurcan
    },

    selamVer() {

        console.log(this.isim); //* Nurcan

        let ok = () => {
            console.log(this.isim) //* Nurcan çünkü fonksiyonun içinde çalıştırışdığı için dışarıdaki objeye erişti
        };

        ok();
        func();

        function func() {
            console.log(this.isim); //* undefined , çünkü kendinden önceki blok scope unda isim yok
        }
    }
};

kullanici.selamVer();
kullanici.func();

/* Bu ok fonksiyonlarının bir özelliğidir. Ayrı bir this kullanmak yerine her zaman bir üstteki bölümden this i alması baya
kullanışlıdır.*/