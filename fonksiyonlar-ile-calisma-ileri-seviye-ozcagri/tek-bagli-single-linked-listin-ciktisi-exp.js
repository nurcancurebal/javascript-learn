/* Tek-bağlı(single-linked) List'in çıktısı

Aşağıdaki gibi bir tane tek-bağlı ( Kendini tekrarlayan ( özçağrı ) ve yığın’da gösterildiği gibi) liste olsun: */

let list1 = {
    deger: 1,
    sonraki: {
        deger: 2,
        sonraki: {
            deger: 3,
            sonraki: {
                deger: 4,
                sonraki: null
            }
        }
    }
};

/* listeYaz(list) adında bir fonksiyon yazın ve bu tüm liste elemanlarını birer birer ekrana bassın.

Hem döngü hem de özçağrı kullanan versiyonlarını yazınız.

Hangisi daha iyidir: özçağrı ile mi yoksa döngü ile mi? */

// Döngü tabanlı çözüm aşağıdaki gibidir:

let list = {
    deger: 1,
    sonraki: {
        deger: 2,
        sonraki: {
            deger: 3,
            sonraki: {
                deger: 4,
                sonraki: null
            }
        }
    }
};

function listeYaz(list) {
    let tmp = list;

    while (tmp) {
        console.log(tmp.deger);

        tmp = tmp.sonraki;
    }

}

listeYaz(list);

/* Dikkat ederseniz tmp adında geçici bir değişken tutarak listeni üzerinden geçildi. Bunun yerine list fonksiyon parametresi de kullanılabilir: */

function listeYaz(list) {

    while (list) {

        console.log(list.deger);

        list = list.sonraki;
    }

}

/* … Fakat çok akıllıca bir yöntem değil. İleride fonksiyonu genişletmek gerekebilir. Liste ile bir şeyler yapmak gerekebilir. Eğer list değişirse bu gerekliliklerin hiçbiri yerine getirilemez.

Değişken isimlerinden konuşmak gerekirse list burada liste’nin kendisidir, ilk elemanıdır ve öyle kalmalıdır. Temiz ve güvenilir.

Diğer taraftan tmp liste için aynı i'nin for için gerekliliği gibidir. */

/* Öz çağrı çözümü
listeYaz(list)'in öz çağrı çözümü şu mantığa dayanır: Liste’nin çıktısını almak için o anki list elemanının çıktısı basılmalıdır. Sonra diğer list.sonraki elemanlarının yapılmalıdır.  */

let list2 = {
    deger: 1,
    sonraki: {
        deger: 2,
        sonraki: {
            deger: 3,
            sonraki: {
                deger: 4,
                sonraki: null
            }
        }
    }
};

function listeYaz(list2) {

    console.log(list2.deger); // elemanın çıktısını bas

    if (list2.sonraki) {

        listeYaz(list2.sonraki); // listenin geri kalan elemanları için de aynısını yap
    }

}

listeYaz(list2);

/* Hangisi daha iyi?

Teknik olarak döngü versiyonu daha etkilidir. İki yöntem de aynı işi yapar, fakat döngü versiyonu iç içe fonksiyonlar için kaynak harcamaz.

Diğer taraftan özçağrı versiyonu daha kısa ve bazen anlaşılması daha kolaydır. */