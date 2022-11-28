/* -> jeneratörler
Normal fonksiyonler yalnızca bir, tek bir değer (veya hiçbir şey) döndürür.

Üreticiler, isteğe bağlı olarak birbiri ardına birden fazla değer, muhtemelen sonsuz sayıda değer döndürebilir ("verim"). Yinelenebilirlerle harika çalışırlar ve kolaylıkla veri akışları oluşturmaya olanak tanırlar. */


/* -> Jeneratör fonksiyonları
Bir üreteç oluşturmak için özel bir sözdizimi yapısına ihtiyacımız var: function*"jeneratör fonksiyoni" olarak adlandırılan.

Şuna benziyor: */

function* generateSequence() {

  yield 1;
  yield 2;
  return 3;
}

// Çağrıldığında generateSequence()kodu çalıştırmaz. Bunun yerine, "jeneratör" adı verilen özel bir nesne döndürür.

// "jeneratör fonksiyoni", "jeneratör nesnesi" yaratır
let generator1 = generateSequence();

/* Nesne generator bir "donmuş fonksiyon çağrısı" olarak algılanabilir:


Oluşturulduktan sonra, kod yürütme en baştan duraklatılır.

Bir jeneratörün ana yöntemi next(). Çağrıldığında, en yakın yield <value> ifadeye kadar yürütmeye devam eder. Ardından yürütme duraklar ve değer dış koda döndürülür.

Örneğin, burada jeneratörü oluşturuyoruz ve ilk elde edilen değerini alıyoruz: */

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

let one = generator.next();

console.log(JSON.stringify(one)); // {"value":1,"done":false}

/* sonucu next() her zaman bir nesnedir:

. value: elde edilen değer.
. done: false kod henüz tamamlanmadıysa, aksi halde true.
Şu an itibariyle, yalnızca ilk değeri aldık:


Tekrar arayalım generator.next(). Yürütmeyi sürdürür ve sonrakini döndürür yield: */

let two = generator.next();

console.log(JSON.stringify(two)); // {"value":2,"done":false}

// Ve üçüncü kez çağırırsak, yürütme return fonksiyonu bitiren ifadeye ulaşır:

let three = generator.next();

console.log(JSON.stringify(three)); // {"value":3,"done":true}

/* Şimdi jeneratör tamamlandı. Nihai sonuç olarak görmeli done:true ve value:3 işleme koymalıyız.

Yeni aramalar generator.next() artık bir anlam ifade etmiyor. Onları yaparsak, aynı nesneyi döndürürler: {done: true}.

Bir jeneratörü "geri almanın" bir yolu yoktur. Ama arayarak başka bir tane oluşturabiliriz generateSequence().

Şimdiye kadar anlaşılması gereken en önemli şey, üreteç fonksiyonlarının normal fonksiyonun aksine kodu çalıştırmamasıdır. “Jeneratör fabrikaları” olarak hizmet veriyorlar. Çalıştırmak function* bir jeneratör döndürür ve ardından ondan değerler isteriz. */


/* -> function* f(…) veya function *f(…)?
Bu küçük bir dini soru, her iki sözdizimi de doğru.

Ancak genellikle ilk sözdizimi tercih edilir, çünkü yıldız * bunun bir üreteç fonksiyonu olduğunu belirtir, adı değil türü tanımlar, bu nedenle function anahtar kelimeye bağlı kalmalıdır. */