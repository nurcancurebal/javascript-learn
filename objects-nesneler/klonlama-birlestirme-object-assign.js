/* Klonlama, birleştirme, Object.assign
Obje kopyalanınca sadece yeni bir referans yaratıldığını söylemiştik. Peki ya objeyi kopyalamak istiyorsanız? Yani aynı
dolaptan bir tane daha yapmak istiyorsanız ne yapmalısınız?
Bu elbette mümkün, bunun için JavaScript metodları bulunmaktadır. Fakat çok az ihtiyaç duyulur. Sadece referansı kopyalamak çoğu zaman yeterli olur.
Fakat bunu gerçekten istiyorsanız, yeni bir obje yaratmak ve kopyalanacak objenin yapısını adım adım kopyalamak zorundasınız. */

let kullanici = {
    isim: "Nurcan",
    yas: 27
};

let klon1 = {}; // yeni obje

// tüm özelliklerin bunun içine kopyalanması gerekmekte.
for (let anahtar in kullanici) {

    klon1[anahtar] = kullanici[anahtar];
}

// şu anda klonu tamamen bağımsız durumda
klon1.isim = "Erdinç"; // İçindeki veri değiştirildi.

console.log(klon1.isim); // Erdinç
console.log(kullanici.isim); // Nurcan

// Bunun yanında Object.assign metodu da kullanılabilir.

/* Object.assign(hedef[, kaynak1, kaynak2, kaynak3...])
hedef ve kaynak1,....,kaynak2,...., kaynakN istenildiği kadar olabilir.
kaynak1,...,kaynakN e kadar olan tüm objelerin özelliklerini hedef e kopyalar. Diğer bir deyişle, 2. argümandan itibaren tüm değerler birinci argümana kopyalanır, sonra hedef döndürülür.
Örneğin, birkaç tane objeyi bir objeye indirgemek için bu metod kullanılabilir. */

let kullanici2 = { isim: "Bal" };

let izinOne = { okuma: true };
let izinTwo = { duzenleme: true };

// bu özellikleri kullanıcıya kopyalamak için
Object.assign(kullanici2, izinOne, izinTwo);

console.log(kullanici2);  // { isim: 'Bal', okuma: true, duzenleme: true }


// Eğer obje(kullanici) aynı isimde özelliğe sahipse bu özelliklerin üstüne yazılır.

let kullanici3 = { isim: "Timur" };

Object.assign(kullanici3, { isim: "Peter", yonetici: true });

console.log(kullanici3);  // { isim: 'Peter', yonetici: true }


// Object.assign ile basit bir objeyi kolayca klonlamak da mümkündür:

let kullanici4 = {
    isim: "Cürebal",
    yas: 1
};

let klon2 = Object.assign({}, kullanici4);

/* kullanici4 objesinin tüm özelliklerini boş bir objeye kopyalar ve bu objeyi döndürür. Aslında daha önce yapılan döngünün aynısı, fakat daha kısa. */


/* Şimdiye kadar kullanici objesinin tüm özelliklerinin ilkel olduğunu varsayıldı. Fakat özellikler içlerinde başka obje barındırabilirler. */

let kullanici5 = {
    isim: "Figen",
    beden: {
        boy: 170,
        en: 60
    }
};

console.log(kullanici5.beden.boy); // 170

/* Artık eskisi gibi klon.beden = kullanici.beden demek yeterli olmayacaktır. Çünkü kullanici.beden artık bir objedir, objelerin referansları kopyalanır. Öyleyse klon ve kullanici aynı beden objesini kullanırlar. */

let kullanici6 = {
    isim: "Ersel",
    beden: {
        boy: 182,
        en: 70
    }
};

let klon3 = Object.assign({}, kullanici6);

console.log(kullanici6.beden === klon3.beden); // true, doğru aynı obje

// diyelim ki kullanici6da değişiklik yaptınız

kullanici6.beden.en++;       // bir özelliği bir yerde değiştirelim

console.log(klon3.beden.en); // 71, gördüğünüz üzere birinde yaptığınız değişiklik diğerini de etkiledi.

/* Bunu düzeltmek için klonlarken eğer obje ise içteki objenin yapısının da kopyalanması gerekmektedir. Buna derinlemesine klonlama denir.
Bu derin klonlama için kullanılan Structured cloning algorithm adında bir algoritma bulunmaktadır. Tekeri tekrar bulmaya gerek olmadığından , uygulaması olan lodash kütüphanesinde bulunan [Structured cloning algorithm]_.cloneDeep(obj) metodu kullanılabilir. */