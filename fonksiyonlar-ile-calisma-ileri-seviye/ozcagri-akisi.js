/* -> Özçağrı Akışı
Özçağrıların kullanılabileceği diğer bir uygulama özçağrı akışıdır.

Bir firma hayal edin. Çalışanların yapısı obje olarak şu şekilde tanımlanabilir: */

let firma1 = {
    satis: [{
        adi: 'Ahmet',
        maasi: 1000
    }, {
        adi: 'Mehmet',
        salary: 150
    }],

    gelistirme: {
        siteler: [{
            adi: 'Mustafa',
            ucret: 200
        }, {
            adi: 'Mazlum',
            ucret: 50
        }],

        dahili: [{
            adi: 'Zafer',
            ucret: 1300
        }]
    }
};

/* Diğer bir deyişle bu firmanın departmanları bulunmaktadır.

. Bir departman çalışanlar dizilerinden oluşabilir. Öreğin satis departmanı 2 tane çalışana sahiptir: Ahmet ve Mehmet.

. Veya bazen departmanlar alt departmanlara ayrılabilirler. Örneğin gelistirme departmanı siteler ve dahili olmak üzere ikiye ayrılmıştır. Her bir alt departmanın kendine ait çalışanları vardır.

. Bunun yanında departmanların büyüyüp alt departmanlara ayrılması da mümkündür.

Örneğin siteler departmanı ileride iki ayrı takıma siteA ve siteB şeklinde ayrılabilirler. Ve yine potansiyele göre ileride bu takımlar da alt takımlara ayrılabilirler.

Öyle bir fonksiyon olsun ki tüm çalışanların maaşlarının toplamını dönsün. Bu nasıl yapılır?

Döngü yaklaşımı kolay değildir, çünkü yapı kolay değildir. Önce firma için bir for döngüsü kullanıldığını ve bununla ilk seviye departmanları bulduğunuzu varsayın. Sonrasında bunun içine bir döngü daha yapıp siteler'i bulmanız gerekir. Ayrıca ilerisi için bir tane daha for döngüsü yapmanız lazım ve belki yine onun içerisine de bir döngü koymanız lazım. 3. basamakta mı 4. basamakta mı durmalı? Eğer ileride bu yapı sadece bir seviyeye indirilirse kodda karmaşıklık meydana gelir.

Özçağrı yaklaşımıyla.

Fonksiyon toplanacak departmanı aldığında iki muhtemel durum mevcuttur:

1. Bu “basit” bir departman olabilir içerisinde çalışanlar bulunur – sonra bunların maaşları basit bir döngüyle toplanabilir.

2. Veya N alt departmana sahip obje olabilir – öyleyse N defa özçağrı yapıp her bir alt departmanın toplamının sonucunu döndürülür.

(1) özçağrının temelidir.

(2) Özçağrının tekrar eden adımlarıdır. Karmaşık görev daha küçük departman görevlerine ayrılır. Sonrasında yine ayrılabilir fakat en sonunda (1)'e erişecektir.

Algoritma kodunu okumak oldukça kolaydır: */

let firma = {

    satis: [{
        adi: 'Ahmet',
        ucret: 1000
    }, {
        adi: 'Mehmet',
        ucret: 150
    }],

    gelistirme: {
        siteler: [{
            adi: 'Mustafa',
            ucret: 200
        }, {
            adi: 'Mazlum',
            ucret: 50
        }],

        dahili: [{
            adi: 'Zafer',
            ucret: 1300
        }]
    }
};

// İşi yapan fonksiyon
function maaslariTopla(firma) {

    if (Array.isArray(firma)) { // (1). durum

        return firma.reduce((onceki, suanki) => onceki + suanki.ucret, 0); // diziyi topla

    } else { // (2.) durum

        let toplam = 0;

        for (let altDep of Object.values(firma)) {

            toplam += maaslariTopla(altDep); // özçağrı ile alt departmanların çağrılması, bunu sum ile topla.

        }

        return toplam;
    }
}

console.log(maaslariTopla(firma)); // 2700

/* Kod oldukça kısa ve anlaması kolay(umarım). Burada özçağrının gücünden bahsetmek mümkün, her seviye alt departman için çalışacaktır. */


/* Prensip basitçe şu şekilde açıklanabilir: Obje için {...} altçağrıları yapılır, [...] ise özçağrı ağacının “yapraklarıdır”, anında sonucu dönerler.

Kodun akıllı özellikler kullandığına dikkat edin, bunlar daha önceki kolarda işlenmişti:

. arr.reduce metodu Dizi Metodları bölümünde bir dizinin toplamını almak için kullanılmıştı.
. for(val of Object.values(obj)) objenin değerlerini dönmek için kullanılmıştı: Object.values objenin değerlerini dizi olarak döner. */

// TODO burayı oku