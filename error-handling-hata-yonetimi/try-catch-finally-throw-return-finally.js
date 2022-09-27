/* -> try…catch…finally

try..catch bloğu son olarak finally ile bitebilir.

Eğer varsa aşağıdaki durumların hepsi için çalışır:

. try sonrası bir hata yoksa.
. catch sonrası bir hata yoksa.
Yazımı şu şekildedir: */

try {

  // ... kodu çalıştırmayı dene ...
} catch (e) {

  // ... hataları ele almak ...

} finally {
  // ... her zaman çalıştır ...
}

// Aşağıdaki kodu çalıştırmayı deneyiniz:

try {

  console.log('try'); // try

  if (true) BAD_CODE();

} catch (e) {

  console.log('catch'); // catch

} finally {

  console.log('finally'); // finally
}

/* Kod iki türlü çalışabilir:

1. true ise, try -> catch -> finally şeklinde sona erer.
2. false ise, try-> finally şeklinde sona erer.

finally genelde try..catch'den önce bir şey yapıp bunu sona erdirmek (finally) istediğiniz durumlarda kullanılır.

Örneğin Fibonacci sayılarını hesaplayan bir fonksiyonun ne kadar sürdüğünü ölçmek istediğinizde, doğal olarak işlem başlamadan süre başlar ve işlem bittikten sonra süre biter. Fakat diyelimki fonksiyonda bir hata var. Aşağıda uygulaması görünen fib(n)'e negatif bir sayı gönderdiğinizde veya integer olmayan bir sayı gönderdiğinizde hata döner.

finally ne olursa olsun süre ölçmeyi sonlandırmak için harika bir yerdir.

Aşağıda finally düzgün veya yanlış çalışan fib fonksiyonunun ne kadar sürdüğünü doğru olarak hesaplamamızı sağlar. */

let num = 35;

let diff, result;

function fib(n) {

  if (n < 0 || Math.trunc(n) != n) { // Math.trunc(): kesirli basamağı kaldırarak bir sayının tamsayı kısmını döndürür.

    throw new Error("Must not be negative, and also an integer.");
  }

  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {

  result = fib(num);

} catch (e) {

  result = 0;

} finally {

  diff = Date.now() - start;
}

console.log(result || "error occured"); // 9227465

console.log(`execution took ${diff}ms`); // execution took 139ms

/* Kodu çalıştırdığınızda 35 değeri girerseniz normal olarak try sonrasında finally sırası ile çalışır. Sonrasında -1 ile deneyin, anında hata alacaksınız. Çalışma süresi 0ms gösterecek. İki çalışmada da süre doğru bir şekilde tutuldu.

Diğer bir deyişle, fonksiyondan çıkmanın iki yolu vardir. Bunlar return veya throw olabilir. finally ise bunların ikisini de idare edebilir. */


/* -> Değişkenler try..catch..finally içerisinde yereldir
Dikkat ederseniz result ve diff değişkenleri try..catch'den önce tanımlanmışlardır.

Diğer türlü let {...} bloğunun içerisinde olsaydı, sadece parantez içerisinde görünür olurdu. */


/* -> finally ve return
Finally kelimesi try..catch'den her türlü çıkış ile çalışır. Bu doğrudan return için de geçerlidir.

Aşağıdaki örnekte try içerisinde return bulunmaktadır. Bu durumda finally sonuç dış koda iletilmeden önce çalışır. */

function func() {

  try {

    return 1;

  } catch (e) {

    /* ... */
  } finally {

    console.log('finally');
  }
}

console.log(func()); // undefined , önce finally içerisindeki console.log çalışır sonra bu.


/* -> try..finally
catch olmadan hazırlanan try..finally yapısı da kullışlıdır. Bunu henelde hatayı o anda idare etmek istemediğimizde kullanırız, bunun ile birlikte başladığımız işlemin bittiğini de garanti altına almak isteriz. */

function func() {
  // tamamlanması gereken bir işlemi başlat. ( süre ölçme gibi )
  try {

    // ...

  } finally {

    // ne olursa olsun bitir.
  }
}

/* Yukarıdaki kodda try içerisinde olacak herhangi bir hata doğrudan dışarı çıkacaktır. Akış dışarı sıçramadan önce finally çalışır. */