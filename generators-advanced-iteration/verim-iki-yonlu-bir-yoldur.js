/* -> "verim" iki yönlü bir yoldur
Bu ana kadar, jeneratörler “steroidler üzerinde yineleyiciler” gibiydi. Ve bu şekilde sıklıkla kullanılırlar.

Ama aslında çok daha güçlü ve esnekler.

Bunun nedeni yieldiki yönlü bir yol olmasıdır: sadece sonucu dışarı döndürmekle kalmaz, aynı zamanda değeri üretecin içine de iletebilir.

Bunu yapmak için, generator.next(arg)bir argümanla çağırmalıyız. Bu argümanın sonucu olur yield. */

function* gen() {
    // Pass a question to the outer code and wait for an answer
    let result = yield "2 + 2?"; // (*)

    console.log(result);
}

let generator1 = gen();

let question = generator1.next().value; // <-- yield returns the value

generator1.next(4); // --> pass the result into the generator1

/* 1. İlk çağrı generator1.next()her zaman tartışmasızdır. Yürütmeyi başlatır ve birincinin sonucunu döndürür yield(“2+2?”). Bu noktada jeneratör yürütmeyi duraklatır (hala o satırda).
2. Ardından, yukarıdaki resimde gösterildiği gibi, sonucu çağıran koddaki değişkene yieldgirer .question
3. Açık generator1.next(4)olduğunda, jeneratör devam eder ve 4sonuç olarak içeri girer: let result = 4.

Lütfen unutmayın, dış kodun hemen araması gerekmez next(4). Değeri hesaplamak zaman alabilir. Bu da geçerli bir koddur: */

// resume the generator1 after some time
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

/* 1. İlk .next()yürütmeyi başlatır… İlkine ulaşır yield.
2. Sonuç dış koda döndürülür.
3. İkincisi , .next(4)ilkinin 4sonucu olarak jeneratöre geri yielddöner ve yürütmeye devam eder.
4. yield… Jeneratör çağrısının sonucu olan saniyeye ulaşır .
5. Üçüncüsü , ikincinin sonucu olarak jeneratöre next(9)geçer ve işlevin sonuna ulaşan yürütmeyi sürdürür, yani .9yielddone: true

Bu bir "ping-pong" oyunu gibi. Her biri next(value)(birincisi hariç), jeneratöre akımın sonucu olan bir değer iletir yieldve ardından bir sonrakinin sonucunu geri alır yield. */