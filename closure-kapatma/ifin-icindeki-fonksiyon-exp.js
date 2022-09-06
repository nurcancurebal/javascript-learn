/* if'in içindeki fonksiyon
Aşağıdaki son satır çalıştığında sonuç ne olur? */

let sozcuk = "Merhaba";

if (true) {

    let kullanici = "Erdinç";

    function selamVer() {

        console.log(`${sozcuk}, ${kullanici}`);
    }
}

selamVer();

/* Sonuç hata olacaktır.

selamVer fonksiyonu if'in içerisinde oluşturulmuştur. Bundan dolayı sadece içerisinde yaşar. Dışında selamVer diye bir fonksiyon bulunmamaktadır. */