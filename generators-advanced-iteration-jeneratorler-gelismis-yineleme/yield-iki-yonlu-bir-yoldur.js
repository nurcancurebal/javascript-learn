/* -> "verim(yield)" iki yönlü bir yoldur
Bu ana kadar, jeneratörler “steroidler kullanan yineleyiciler” gibiydi. Ve bu şekilde sıklıkla kullanılırlar.

Ama aslında çok daha güçlü ve esnekler.

Bunun nedeni yield iki yönlü bir yol olmasıdır: sadece sonucu dışarı döndürmekle kalmaz, aynı zamanda değeri üretecin içine de iletebilir.

Bunu yapmak için, generator.next(arg) bir bağımsız değişkenle, öğesini çağırmalıyız. Bu argüman sonucu olur yield. */

function* gen() {
    // Dış koda bir soru iletin ve bir cevap bekleyin
    let result = yield "2 + 2?"; // (*)

    console.log(result);
}

let generator1 = gen();

let question = generator1.next().value; // <-- yield value döndürür

generator1.next(4); // --> sonucu generator1'e iletin

/* 1. İlk çağrı generator1.next() her zaman tartışmasızdır. Yürütmeyi başlatır ve birincinin sonucunu döndürür yield(“2+2?”). Bu noktada jeneratör yürütmeyi duraklatır (hala o satırda).
2. Ardından, sonucu çağıran koddaki değişkene yield girer .question
3. tarihinde generator.next(4), jeneratör kaldığı yerden devam eder ve 4 sonuç olarak devreye girer: let result = 4.

Lütfen dikkat, dış kodu hemen aramak zorunda değilsiniz next(4). Değerin hesaplanması zaman alabilir. Bu da geçerli bir koddur: */

// bir süre sonra jeneratör1'i yeniden başlatın
setTimeout(() => generator1.next(4), 1000);

/* Sözdizimi biraz garip görünebilir. Bir işlevin ve çağıran kodun değerleri birbirine geçirmesi oldukça nadirdir. Ama olan şey tam olarak bu.

İşleri daha açık hale getirmek için, daha fazla çağrı içeren başka bir örnek: */

function* gen() {

    let ask1 = yield "2 + 2?";

    console.log(ask1); // 4 , 4

    let ask2 = yield "3 * 3?"

    console.log(ask2); // 9 , 4
}

let generator2 = gen();

console.log(generator2.next().value); // 2 + 2?

console.log(generator2.next(4).value); // 3 * 3?

console.log(generator2.next(9).done); // true

/* 1. İlk .next() yürütmeyi başlatır… İlkine ulaşır yield.
2. Sonuç dış koda döndürülür.
3. İkincisi , .next(4)ilkinin 4 sonucu olarak jeneratöre geri yield döner ve yürütmeye devam eder.
4. yield… Jeneratör çağrısının sonucu olan saniyeye ulaşır .
5. Üçüncüsü , ikincinin sonucu olarak jeneratöre next(9) geçer ve işlevin sonuna ulaşan yürütmeyi sürdürür, yani .9 yield done: true

Bu bir "ping-pong" oyunu gibi. Her biri next(value)(birincisi hariç), jeneratöre akımın sonucu olan bir değer iletir yield ve ardından bir sonrakinin sonucunu geri alır yield. */