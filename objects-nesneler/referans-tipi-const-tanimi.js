// Sabit (const) olarak tanımlanan objeler değiştirilebilir .

const kullanici = {
    isim: "Nurcan"
};

kullanici.yas = 25; // (*)

console.log(kullanici.yas); // 25

// (*) satırında hata alınacakmış gibi dursa da hata alınmaz ve bir sorun olmadan çalışır. Bunun nedeni const'un
// referansının değişmediğinde sorun yaratmamasıdır. Daha önce de kullanici aynı objeye referans gösteriyordu, daha sonra
// da. içinde ne olduğu const'u ilgilendirmez. Tekrar atama yapmadığınız sürece bir sorun teşkil etmez.
// Örneğin const aşağıdaki gibi bir kullanımda, yani kullanici değişkenine başka bir obje referans etmeye çalıştığımızda
// hata verir:

const kullanici2 = {
    isim: "Erdinç"
};

// Hata (kullanici'ya tekrar atama yapılamaz)
kullanici2 = {
    isim: "Bal"
};