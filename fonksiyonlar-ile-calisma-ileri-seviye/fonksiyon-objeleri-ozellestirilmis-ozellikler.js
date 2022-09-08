// Kendi özelliğinizi eklemek de mümkündür. Örneğin aşağıda counter1 özelliği ile toplam çağrı sayısı tutulmaktadır:

function selamVer1() {

  console.log("Selam");

  // Kaç defa çağırıldığını tutar.
  selamVer1.counter1++;
}

selamVer1.counter1 = 0; // ilk değer

selamVer1(); // Selam
selamVer1(); // Selam

console.log(`selamVer1 ${selamVer1.counter1} defa çağırılmıştır`); // selamVer1 2 defa çağırılmıştır.


/* -> Özellik değişken değildir
Fonksiyona atanan selamVer1.counter1 = 0 selamVer1 fonksiyonunun içerisinde counter1 değişkenini tanımlamaz. Diğer bir deyişle counter1 özelliği ile let counter1 birbirinden tamamen farklı şeylerdir.

Fonksiyona obje gibi davranıp özellik eklenebilir. Bu çalışmasında bir etki yaratmaz. Değişkenler fonksiyon özelliklerini kullanmaz, keza fonksiyon özellikleri de değişkenleri kullanmaz.

Fonksiyon özellikleri closure kullanılarak tekrardan yazılabilir. Örneğin yukarıdaki sayaç örneğini Closure kullanarak tekrardan yazacak olursak: */

function makeCounter2() {
  // let count = 0 yazmak yerine

  function counter2() {

    return counter2.count2++;
  };

  counter2.count2 = 0;

  return counter2;
}

let counter2 = makeCounter2();

console.log(counter2()); // 0
console.log(counter2()); // 1

/* count artık fonksiyonun içerisinde bulunur, dış ortamda değil.

Closure kullanmak iyi mi kötü mü?

Eğer sayac'ın değeri dışarıdaki değişkende bulunuyorsa, dışta bulunan kod buna erişemez. Sadece içteki fonksiyon bunu modifiye edebilir. Bu da anca fonksiyona bağlıysa gerçekleşebilir: */

function makeCounter3() {

  function counter3() {

    return counter3.count3++;
  };

  counter3.count3 = 0;

  return counter3;
}

let counter3 = makeCounter3();

counter3.count3 = 10;

console.log(counter3()); // 10
console.log(counter3()); // 11

// Bundan dolayı asıl önemli olan sizin hangi şekilde kullanmak istediğiniz.