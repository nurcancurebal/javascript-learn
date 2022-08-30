/* Diziyi karıştır

karistir(dizi) adında bir fonksiyon yazın ve bu fonksiyon dizideki elemanları her defasında rasgele yeniden dizsin.

let arr = [1, 2, 3];

shuffle(arr);
 arr = [3, 2, 1]

shuffle(arr);
 arr = [2, 1, 3]

shuffle(arr);
 arr = [3, 1, 2]
 ...
Her eleman aynı olasılıkla sıralanmalıdır. Örneğin [1,2,3] [1,2,3] veya [1,3,2] veya [3,1,2] vs. şeklinde sıralanabilir olmalıdır.

çözüm */

// En basit çözümü aşağıdaki gibi olabilir.

function karistir(dizi) {

    dizi.sort(() => Math.random() - 0.5);
}

let dizi = [1, 2, 3];

karistir(dizi);
console.log(dizi); // [ 2, 3, 1 ]

/* Yukarıdaki çalışıyor denebilir çünkü Math.random()-0.5 rasgele bir sayıdır ve pozitif veya negatif olabilir. Böylece sıralama fonksiyonu rasgele elemanları dizer.

Fakat sıralama fonksiyonu bu amaçla kullanılamaz. Tüm permütasyon aynı olasılıkta değildirler.

Aşağıdaki koda bakılacak olursa karistir 1000000 defa çalıştırılacak olursa bile olası sonuçlar şu şekildedir: */

function shuffle(array) {

    array.sort(() => Math.random() - 0.5);
}

// mümkün olan tüm permütasyonların görünme sayısı.

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {

    let array = [1, 2, 3];

    karistir(array);
    count[array.join('')]++;
}

// mümkün olan tüm permütasyonların görünme sayısı.
for (let key in count) {

    console.log(`${key}: ${count[key]}`);
}

/* ( Temmuz 2017 itibari ile sonuçlar aşağıdaki gibidir.)

123: 250706
132: 124425
213: 249618
231: 124880
312: 125148
321: 125223
Görüğünüz gibi 123 ve 213 ün çıkma olasılığı daha fazladır.

Sonuçlar JavaScript motoruna göre değişebilir. Fakat görüldüğü gibi bu fonksiyon çok güvenilir değildir.

Neden çalışmadı? Genel olarak konuşmak gerekirse sort kara kutudur: biz buraya bir dizi göndeririz o içinde karşılaştırma fonksiyonları vs. kullanır ve biz sıralanmış şekilde bu diziyi alırız. Bu kadar fazla rasgele karşılaştırmadan dolayı bu kara kutu deliye döndü, bu deliye dönme olayında nasıl davranacağı da JavaScript motoruna bağlıdır.

Bu problem bir kaç yöntemle çözülebilir. Fisher-Yates shuffle. Fikre göre dizi tersten başlayarak rasgele sayı ile değiştirilecek şekilde yazılmalıdır: */

function karistir(array) {

    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1)); // random index  0 ile i arasında
        [array[i], array[j]] = [array[j], array[i]]; // elemanların yer değiştirmesi için.
    }
}

// Aynı şekilde test edilirse:

function karistir(array) {

    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// mümkün olan tüm permütasyonların görünme sayısı.
let count2 = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {

    let array = [1, 2, 3];

    karistir(array);
    count2[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count2) {

    console.log(`${key}: ${count2[key]}`);
}

/* Örnek çıktı:

123: 166693
132: 166647
213: 166628
231: 167517
312: 166199
321: 166316
Şimdi daha iyi görünüyor: tüm permütasyonlar yakın olasılıkla.

Performans yönünden Fisher-Yates algoritması harikatıdır. Hiç sıralama ile uğraşmaya gerek yok. */