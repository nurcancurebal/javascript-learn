// Objeler ile ilkel tipler (karakter dizisi, sayı, boolean vs.) arasındaki temel fark objelerin saklanması ve kopyalanması
// “referans” ile olur.
// Fakat ilkel tipler tamamen kopyalanır.

let mesaj = "Merhaba!";
let karsilama = mesaj;

// Sonuç olarak birbirinden bağımsız iki değişken de "Merhaba!" değerini tutar.

// Objeler bu şekilde çalışmaz:
// Obje değişkeni objenin kendisini değil hafızadaki adresini tutar. Diğer bir deyişle referansını tutar.
// Bir objenin resmi aşağıdaki gibidir:

let kullanici = {
    isim: "Erdinç"
};


// Obje hafızada herhangi bir yerde saklandı ve kullanici değişkeni buna “referans” oldu.
// Obje değişkeni kopyalandığında aslında objenin referansı kopyalanır, hafızadaki obje kopyalanmaz.
// Yine objeyi bir dolap olarak düşünürseniz değişken bu dolabın anahtarıdır. Kopyaladığınız zaman dolabı değil de anahtarı
// kopyalamış olursunuz.

let kullaniciTwo = { isim: "Bal" };

let yonetici = kullaniciTwo; // referansı kopyalar.

// Artık iki tane değişken var ve ikisi de aynı objeye referans oldu:
// Bu iki değişkenden birini kullanarak objenin içeriği değiştirilebilir:

let kullaniciThree = { isim: 'Nurcan' };

let yoneticiThree = kullaniciThree;

yoneticiThree.isim = 'Timur'; // yonetici referansı kullanılarak değiştirildi.

console.log(kullaniciThree.isim); // 'Timur', değişikliği kullanici referansında da etkili oldu. `Nurcan` değişerek 
//`Timur` oldu.

// Bu örnekten de anlaşılacağı üzere sadece bir tane obje var. Bir dolabın iki anahtarı olması gibi. Bu anahtarlardan biri
// yonetici diğeri kullanici dır. yonetıcı ile dolabı açıp bir şey değiştirip daha sonra kullanici anahtarı ile
// açtığınızda dolabın içindeki değişikliği görebilirsiniz.