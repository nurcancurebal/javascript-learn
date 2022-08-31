/* Anagram Filtresi

Anagramlar aynı sayıda harfi olan aynı harflere sahip kelime demektir. Dizilimleri farklı olmalıdır.

Örneğin:

aks, ask, kas, sak
alim, amil, ilam, imal, imla, mail, mali
açlık, akçıl, çakıl, çalık, çalkı, kaçlı, kalıç, lakç

atemiz(dizi) adında bir fonksiyon yazın ve bu fonksiyon diziyi anagramlardan temizlesin.

Örneğin: */

/* let arr = ["aks", "alim", "açlık", "ask", "ilam", "çalık"];

console.log( aclean(arr) ); // "aks,alim,açlık" veya "ask,ilam,çalık"

Hangisi olduğuna bakılmaksızın her anagram grubunda bir tane kelime kalmalıdır. Hangisinin olduğu önemli değildir.

Testler ile korunaklı olan aç.

çözüm
Tüm anagramları bulmak için öncelikle kelimeleri harflerine ayırıp sonrasında sıralamak gerekmektedir.

Örneğin: */

/* aks, ask, kas, sak
alim, amil, ilam, imal, imla, mail, mali
açlık, akçıl, çakıl, çalık, çalkı, kaçlı, kalıç, lakç
...
Harf sıralı tipler map anahtarları olacak şekilde kaydedilir. */

function atemiz(dizi) {

    let map = new Map(); // Map(0) {size: 0} oluşturuyorfor satırına geçtiğinde

    for (let word of dizi) {

        // kelimeyi harflere ayır, sonrasında birleştir.
        let sorted = word.toLowerCase().split('').sort().join(''); // (*) küçülttük, harf harf parçaladık arraye çevirdik, sıraladık, stringe çevirdik birleştirdik

        map.set(sorted, word);
        // Map(1) {size:1, aks => aks}
        // Map(2) {size:2, aks => aks, ailm => alim}
        // Map(3) {size:3, aks => aks, ailm => alim, aklçı => açlık}
        // Map(3) {size:3, aks => ask, ailm => alim, aklçı => açlık}
        // Map(3) {size:3, aks => ask, ailm => ilam, aklçı => açlık}
        // Map(3) {size:3, aks => ask, ailm => ilam, aklçı => çalık}
    } //! keyleri aynı olan value ları bir defa alıyor 1 key olacak ve son gelen value

    return Array.from(map.values()); // Array.from() statik yöntemi, yinelenebilir veya dizi benzeri bir nesneden yeni, sığ kopyalanmış bir Array örneği oluşturur.
}

let arr = ["aks", "alim", "açlık", "ask", "ilam", "çalık"];

console.log(atemiz(arr)); // [ 'ask', 'ilam', 'çalık' ]

/* Harflerin sıralanması (*)'da gösterilen zincirleme çağrılar ile yapılır.

Daha kolay anlaşılabilmesi için bunu satırlara ayıralım: */

/*
let sorted = arr[i] // AKS
    .toLowerCase() // aks
    .split('') // ['a','k','s']
    .sort() // ['a','k','s']
    .join(''); // aks 
*/

/* İki farklı kelime 'AKS' ve 'ASK' sıralandığında ikisi de 'AKS' olmaktadır.

Bir sonraki satır bu kelimeleri map’e eklemeye yarar: */
// map.set(sorted, word);

/* Eğer aynı karakterlere sahip kelime ile tekrar karşılaşılırsa, map olduğundan dolayı bir öncekinin üzerine yazılacaktır. Bundan dolayı her zaman bir karakter-form’u için maksimum bir tane kelimeye sahip olacağız.

Sonunda Array.from(map.values()) bu map değerleri üzerinden döngü yapılmasını sağlar.

Burada Map yerine normal obje de kullanılabilirdi. Çünkü anahtarlar karakter dizisi olacak.

Bu durumda çözüm şu şekilde olabilir: */

function atemiz(dizi) {

    let obj = {};

    for (let i = 0; i < dizi.length; i++) {

        let sorted = dizi[i].toLowerCase().split("").sort().join("");

        obj[sorted] = dizi[i]; //! boş objeye key ve value ekledik
    }

    return Array.from(Object.values(obj)); // yinelenebilir veya dizi benzeri bir nesneden yeni, sığ kopyalanmış bir Array örneği oluşturur.
}

let arr2 = ["aks", "alim", "açlık", "ask", "ilam", "çalık"];

console.log(atemiz(arr2)); // [ 'ask', 'ilam', 'çalık' ]