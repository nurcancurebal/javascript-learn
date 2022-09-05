/* -> Özçağrı yapıları
Özçağrı yapıları, kendini bazı bölümlerde tekrar eden veri yapılarıdır.

Örnekte kullanılan firmalar objesi bu yapıyı kullanmaktadır.

Bir departman

. Dizi veya çalışanlardan oluşur.
. Veya departmanlardan oluşur.

Web-geliştiricileri için daha bilinen bir örneği: HTML ve XML dökümanlarıdır.

HTML dökümanında, HTML-tag’ı şunları içerebilir:

. Metinler
. HTML-yorumları
. Diğer HTML-tagları ( bunlar da yine metinler, yorumlar ve diğer tagları içerebilir)

Bu da yine özçağrı yapısıdır.

Daha iyi anlaşılması için “Linked list” yapısı üzerinden gitmek gerekir. Bu bazı durumlarda dizilere alternatif olarak kullanılabilir. */


/* -> Linked list
Diyelim objelerin sıralı şekilde liste halinde tutmak istiyorsunuz.

Diziler ile aşağıdaki gibi yapılabilir: */

//*let arr = [obj1, obj2, obj3];

/* … Fakat diziler “eleman silme”, “eleman ekle” gibi olaylar için çok işlem yaparlar. Örneğin arr.unshift(ob) işlemi tüm elemanları yeni eleman için tekrardan sıraya dizer, eğer dizi büyükse bu zaman alır. Aynısı arr.shift() için de geçerlidir.

Tekrardan numaralama gerektirmeyen arr.push/pop metodları kullanılabilir. Bunlar da dizinin sonuna ekler veya çıkarır. Çok elemanlı dizilerde bu işlemlerin yavaş olacağı söylenebilir.

Alternatif olarak, eğer hızlı bir şekilde, silme/yerleştirme istenirse diğer bir veri yapısı olan linked list kullanılabilir.

linked list elemanı özçağrı biçimde aşağıdaki obje gibi tanımlanır:

. deger.
. sonraki sonraki linked list elemanı’nı tenımlar, sonuncuysa null döner. */

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

// Bu yapıyı yaratmanın alternatif yolu şu şekildedir:

let list2 = { deger: 1 };
list2.sonraki = { deger: 2 };
list2.sonraki.sonraki = { deger: 3 };
list2.sonraki.sonraki.sonraki = { deger: 4 };

console.log(list2);
/*  {
    deger: 1,
    sonraki: { deger: 2, sonraki: { deger: 3, sonraki: [Object] } }
} */

/* Burada görüldüğü üzere her obje degere sahiptir ve komşusu olan sonrakini gösterir. list değişkeni bu zincirin ilk halkasıdır, sonrasında sonraki pointer’ını takip eder.

Liste kolayca birçok parçaya bölünebilir ve sonradan tek bir yapı haline getirilebilir: */

let ikinciList = list2.sonraki.sonraki;
list2.sonraki.sonraki = null;

console.log(list2); // { deger: 1, sonraki: { deger: 2, sonraki: null } }

console.log(ikinciList); // { deger: 3, sonraki: { deger: 4 } }

// Birleştirme:

list2.sonraki.sonraki = ikinciList;

console.log(list2);
/* {
    deger: 1,
    sonraki: { deger: 2, sonraki: { deger: 3, sonraki: [Object] } }
} */

/* Ve istenildiği gibi elemanlar bir yerden silinebilir veya eklenebilir.

Örneğin yeni bir değer ekleneceği zaman, listenin başlangıcının güncellenmesi gerekir: */

let list3 = { deger: 1 };
list3.sonraki = { deger: 2 };
list3.sonraki.sonraki = { deger: 3 };
list3.sonraki.sonraki.sonraki = { deger: 4 };

console.log(list3);
/* {
    deger: 1,
    sonraki: { deger: 2, sonraki: { deger: 3, sonraki: [Object] } }
} */

// Yeni bir değer ekleneceği zaman
list3 = { deger: "yeni eleman", sonraki: list3 }; //* özçağrı

console.log(list3);
/* {
    deger: 'yeni eleman',
    sonraki: { deger: 1, sonraki: { deger: 2, sonraki: [Object] } }
} */

// Yine ortalardan bir yerden veri silineceği zaman sonraki'nin bir öncekine getirilmesi gerekir..

list3.sonraki = list3.sonraki.sonraki;

console.log(list3);
/* {
    deger: 'yeni eleman',
    sonraki: { deger: 2, sonraki: { deger: 3, sonraki: [Object] } }
} */

/* list.sonraki'nin değeri 1'den 2'ye geçirildi. 1 değeri artık zincirden çıkarıldı. Eğer bu değer başka bir yerde tutulmuyor ise, bu değer ileride otomatik olarak hafızadan silinecektir.

Diziler gibi çok büyük sayida tekrar numaralama bulunmamaktadır, ve kolayca istenilen eleman istenilen yere koyulur.

Her zaman List diziden daha iyidir denemez. Öyle olsaydı herkes dizi yerine List kullanırdı.

En büyük handikapı List’te istenilen elemana kolayca erişim sağlanamaz. Dizilerde bu oldukça kolaydır: dizi[n] doğrudan referans verir. Fakat dizilerde ilk elemandan itibaren sonraki şeklinde N defa gitmek gerekir.

Fakat çoğu zaman böyle bir işleme ihtiyaç duymayız. Örneğin bir kuyruk ihtiyacı olduğunda hatta deque ihtiyacı olduğunda hızlı bir şekilde baştan veya sondan eleman eklenip silinmesi gerekir.

Bazen kuyruk adında bir değişken eklenerek ( yeni eleman eklendiğinde/çıkarıldığında ) listenin son elemanı takip edilebilir. Büyük dizilerde listeye göre hız oldukça fazladır. */