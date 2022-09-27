/* -> Düzenlenmiş hatalar, hataların geliştirilmesi
Bir şey geliştirirken, genelde kendi hata sınıflarımıza sahip olmak isteriz, böylece bize has yerlerde oluşabilecek hataları idare edebiliriz. Örneğin network hataları için HttpError, veri tabanı hataları için DbError, arama hataları için NotFoundError gibi.

Hatalarımız basit hata özelliklerini message, name ve stack'i desteklemelidir. Bunun ile birlikte kendine has özellikleri de olabilir. Örneğin HttpError objesi statusCode özelliğine sahip olabilir. Bu özelliğin değeri de 404, 403, 500 gibi hata kodları olacaktır.

JavaScript throw'un argüman ile atılmasına izin verir. Teknik olarak hata sınıflarımızın hepsinin Error'dan türemesine gerek yoktur. Fakat türetirsek obj instance of kullanmak mümkün olacaktır. Böylece hata objesi tanımlanabilir. Bundan dolayı türetirseniz daha iyidir.

Uygulamanızı geliştirirken oluşturacağınız HttpTimeoutError gibi sınıflar HttpError'dan türetilebilir. */


/* -> Hata sınıflarını genişletme
Örnek olarak, readUser(json) adında bir fonksiyon olsun ve bu fonksiyon JSON okusun.

Geçerli bir json şu şekildedir: */

let json = `{ "name": "John", "age": 30 }`;

/* Dahili olarak gelen JSON.parse kullanılacaktır. Eğer bozuk json gelirse bu durumda SyntaxError atar.

Fakat json yazım olarak doğru olsa bile geçerli sayılmayabilir, değil mi? Belki bizim ihtiyacımız veri bulamamaktadır. Örneğin, name ve age özellikleri bulunmaz ise bu durumda bizim için geçerli bir veri sayılmaz.

readUser(json) fonksiyonu sadece JSON okumayacak, doğruluk kontrolü de yapacaktır. Eğer gerekli alanlar yok ise, format yanlışsa bu durumda bu bizim için hatadır. Ayrıca bu bir SyntaxError yani yazım hatası değildir. Çünkü yazım olarak doğru olsa da başka türde bir hatadır. Bu hatalara ValidationError diyeceğiz ve bunun için bir sınıf oluşturacağız. Bu tür hatalar ayrıca hatanın nedeni hakkında da bilgi içermelidir.

Bizim yazacağımız ValidationError sınıfı dahili olarak bulunan Error sınıfından türemelidir.

Error sınıfı gömülü olarak gelmektedir. Genişletmeden önce neyi genişleteceğimizi bilmek iyi olacaktır: */

// Gömülü gelen error sınıfının basitleştirilmiş tanımı JavaScript kodu olarak gösterilmektedir.
class Error {

  constructor(message) {

    this.message = message;
    this.name = "Error"; // (farklı gömülü hata sınıfları için farklı isimler)
    this.stack//= <nested calls>; // standartlarda yok fakat çoğu ortam desteklemekte
  }
}

// Şimdi ValidationError kalıtımını yapabiliriz:

class ValidationError1 extends Error {

  constructor(message) {

    super(message); // (1)

    this.name = "ValidationError1"; // (2)
  }
}

function test() {

  throw new ValidationError1("Whoops!");
}

try {

  test();

} catch (err) {

  console.log(err.message); // Whoops!
  console.log(err.name); // ValidationError1
  console.log(err.stack); // İç içe çağrıların hangi satırlarda olduğunun listesi.
}

/* Yapıcıya bakarsanız:

1. (1) satırda üst sınıfın yapıcısı çağırılmakta. Javascript bizim kalıtılan sınıftan super ile üst sınıfı çağırmamız koşulunu koymaktadır. Böylece üst sınıftaki yapıcı message'ı doğru bir şekilde ayarlar.

2. Üst sınıfın yapıcısı da name ve "Error" özelliğini ayarlar, bundan dolayı (2) satırda bunu doğru değere ayarlamış oluruz.
readUser(json) kullanmayı deneyelim: */

class ValidationError2 extends Error {

  constructor(message) {

    super(message);

    this.name = "ValidationError2";
  }
}

function readUser(json) {

  let user = JSON.parse(json);

  if (!user.age) {

    throw new ValidationError2("No field: age"); // No field: age
  }

  if (!user.name) {

    throw new ValidationError2("No field: name");// No field: name
  }

  return user;
}

// try..catch ile çalışan bir örnek.

try {

  let user = readUser('{ "age": 25 }');

} catch (err) {

  if (err instanceof ValidationError2) {

    console.log("Invalid data: " + err.message); // Invalid data: No field: name

  } else if (err instanceof SyntaxError) { // (*)

    console.log("JSON Syntax Error: " + err.message);

  } else {

    throw err; // bilinmeyen bir hata, tekrar at(**)
  }
}

/* Yukarıdaki try..catch bloğu hem bizim yazdığımız ValidationError2 hem de gömülü olarak gelen SyntaxError hatalarını idare etmektedir.

instanceof ile hataların tiplerinin nasıl kontrol edildiğine dikkat edin. (*)

Ayrıca err.name'e şu şekilde bakabiliriz: */

// ...
//  (err instanceof SyntaxError) kullanmak yerine
// } else if (err.name == "SyntaxError") { // (*)
// ...

/* instanceof kullanmak daha iyidir. İleride ValidationError2'yi genişletir ve PropertyRequiredError gibi alt tipler oluşturursanız instanceof ile kalıtılan sınıfı da kontrol etmiş olursunuz. Bundan dolayı gelecekte olacak değişikliklere daha iyi tepki verir.

Ayrıca catch bilinmeyen bir hata olduğunda tekrardan bu hatayı atması (**) oldukça önemlidir. catch sadece veri kontrolü ve yazım hatalarını kontrol etmektedir. Diğer hatalar ise bilinmeyen hatalar bölümüne düşmektedir. */