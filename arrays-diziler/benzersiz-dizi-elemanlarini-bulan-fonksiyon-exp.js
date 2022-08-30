/* Benzersiz dizi elemanlarını bulan fonksiyonu yazınız.

Diyelim ki arr adında bir diziniz var.

benzersiz(arr) adında bir fonksiyon yazın ve bu fonksiyon arr içinde bulunan benzersiz elemanları dönsün.

Örneğin: */

function benzersiz(arr) {
    /* your code */
}

let kullanicilar = ["Emine", "Muzaffer", "Fatma", "Kanako",
    "Kanako", "Muzaffer", "Fatma", "Kanako", ":-O"
];

console.log(benzersiz(kullanicilar)); // [ 'Emine', 'Muzaffer', 'Fatma', 'Kanako', ':-O' ]

/* Testler ile korunaklı olan aç.

çözüm
Dizinin elemanlarını dolaşacak olursak:

Her eleman için sonuç dizisinde bu elemanın olup olmadığınına bakılacak.
Eğer var ise, görmezden gelinecek, diğer türlü sonuç dizisine eklenecek. */

function benzersiz(arr) {

    let sonuc = [];

    for (let str of arr) {

        if (!sonuc.includes(str)) {

            sonuc.push(str);
        }
    }

    return sonuc;
}

let kullanicilar2 = ["Emine", "Muzaffer", "Fatma", "Kanako",
    "Kanako", "Muzaffer", "Fatma", "Kanako", ":-O"
];

console.log(benzersiz(kullanicilar2)); // [ 'Emine', 'Muzaffer', 'Fatma', 'Kanako', ':-O' ]

/* Kod çalışacaktır, fakat performans problemi yaratabilir.

sonuc.includes(str) sonuc dizisini tamamen dolanır ve str ile karşılaştırır.

Diyelimki sonuc dizisinde 100 tane eleman var ve str ile eşleşen yok. sonuc dizisi dolanılacak ve kesinlikle 100 defa karşılaştırma yapılacaktır. Eğer sonuc dizisi 10000 gibi elemana sahip ise bu karşılaştırma 10000 olacaktır.

Aslında problem bu değildir. JavaScript motoru 10000 karşılaştırmayı mikrosaniyeler içerisinde yapabilir.

Asıl sorun bu testlerin arr'in her bir elemanı için yapılmasıdır.

Yani arr.length 10000 olduğundan dolayı biz 10000*10000 = 100 milyon karşılaştırma olmaktadır.

Bundan dolayı bu çözüm az elemana sahip diziler için kullanılabilir.

Bu optimizasyonu Map, Set, WeakMap ve WeakSet bölümünde göreceksiniz. */