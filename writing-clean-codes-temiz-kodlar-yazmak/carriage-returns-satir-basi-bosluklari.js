/* İki türlü satır başı standardı vardır.

Yatay boşluklar:2(4) boşluk.

Yatay boşluklar genelde 2 veya 4 veya “Tab” sembolünden oluşur. Bunlardan hangisinin seçilmesi gerektiği bir çeşit savaştır.
Bugünlerde boşluk tuşu ile boşluk bırakmak daha fazla kullanılan yöntemdir.
Boşluk tuşu ile satıra başlamanın “Tab” a göre üstünlü daha esnek ayarlanabilir olmasından dolayıdır.
Örneğin argümanlar şu şekilde hizalanabilir: */

goster(parametreler,
    hizalandı, // soldan 5 boşluk
    ilki,
    sonra,
    digeri
), {
    // ...
}


/*
Dikey boşluk: mantıksal blokları ayırmak için satır arası bırakmak

En basit bir fonkiyonda bile mantıksal blokları ayırma ihtiyacınız olabilir. Aşağıdaki örnekte, değişkenlerin tanımlanması
ve sonucun dikey olarak ayrılmasına dikkat edin: */

function üst(x, n) {
    let sonuc = 1;
    //              <--
    for (let i = 0; i < n; i++) {
        sonuc *= x;
    }
    //              <--
    return sonuc;
}

// Eğer okunurluluğa etki edecekse yeni bir satır arası vermekten çekinmeyin. Kanıya göre 9 satırdan fazla kod varsa arada
// kesin bir satır arası olmalıdır.