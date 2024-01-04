/* -> Nesneleri dönüştürmek için Object.fromEntries
Bazen bir nesneyi Mape dönüştürüp ardından onu objeye geri dönüştürmemiz gerekir

Halihazırda objden Map yapmak için new Map(Object.entries(obj)) var.

Object.fromEntries in sözdizimi(syntaxi) tam tersini yapar. [key, value] çifti dizisi verildiğinde, bir obje oluşturur: */

let fiyatlar = Object.fromEntries([
    ['muz', 1],
    ['portakal', 2],
    ['et', 4]
]);

console.log(fiyatlar); // { muz: 1, portakal: 2, et: 4 }

/* Pratik uygulamaları görelim.

Örneğin, mevcut olandan iki kat fiyatla yeni bir nesne oluşturmak istiyoruz.

Diziler için, bir diziyi dönüştürmeye izin veren .map metodumuz var, ancak nesneler için böyle bir şey yok.

Bu yüzden bir döngü kullanabiliriz: */

let fiyatlar2 = {
    muz: 1,
    portakal: 2,
    et: 4,
};

let ikiKatiFiyatlar2 = {};

for (let [product, price] of Object.entries(fiyatlar2)) {

    ikiKatiFiyatlar2[product] = price * 2; //! boş objenin içine ekleme
}

console.log(ikiKatiFiyatlar2); // { muz: 2, portakal: 4, et: 8 }

/* …Veya Object.entries kullanarak nesneyi bir Array olarak temsil edebilir, daha sonra işlemleri map (ve muhtemelen diğer dizi metodları) ile gerçekleştirebilir ve daha sonra Object.fromEntries kullanarak geri dönebiliriz.

Bunu bizim objemiz için yapalım: */

let fiyatlar3 = {
    muz: 1,
    portakal: 2,
    et: 4,
};

let ikiKatiFiyatlar3 = Object.fromEntries(
    // diziye dönüştürür, Map ve sonra fromEntries nesneyi geri döndürür
    Object.entries(fiyatlar3).map(([key, value]) => [key, value * 2])
);

console.log(ikiKatiFiyatlar3); // { muz: 2, portakal: 4, et: 8 }

/* İlk görüşte zor görünebilir, ancak bir veya iki kez kullandıktan sonra anlaşılması kolaylaşır.

Mapten bir obje almak içinfromEntries de kullanabiliriz.

Örneğin. Bir fiyat Mapimiz var, ancak bunu bir nesne bekleyen 3. taraf koduna geçirmemiz gerekiyor.

Şu şekilde: */

let map = new Map();
map.set('muz', 1);
map.set('portakal', 2);
map.set('et', 4);

let obj = Object.fromEntries(map);

console.log(obj); // { muz: 1, portakal: 2, et: 4 }