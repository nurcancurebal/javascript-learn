/* -> Sadece Bir Sözdizimi Şekeri Değil
Bazen insanlar JavaScript'te sınıfın bir "sözdizimi şekeri" olduğunu söyler, çünkü aynısını class anahtar kelimesi olmadan da ilan edebiliriz: */

// sınıf Kullanıcısını saf işlevlerde yeniden yazma

// 1. Yapıcı işlevi oluştur
function User(name) {

    this.name = name;
}
// herhangi bir fonksiyon prototipi varsayılan olarak yapıcı özelliğine sahiptir,
// bu yüzden onu yaratmamıza gerek yok

// 2. Yöntemi prototipe ekleyin
User.prototype.sayHi = function () {

    console.log(this.name); // John
};

// Kullanımı:
let user = new User("John");

user.sayHi();

/* Bu tanımın sonucu aşağı yukarı aynıdır. Bu nedenle, sınıfın bir yapıcıyı prototip yöntemleriyle birlikte tanımlamak için bir sözdizimi şekeri olarak kabul edilmesinin gerçekten nedenleri vardır.

Bununla birlikte, önemli farklılıklar vardır.

1. İlk olarak, sınıf tarafından yaratılan bir fonksiyon, [[FunctionKind]]:"classConstructor" özel bir dahili özelliği ile etiketlenir. Yani tamamen manuel olarak oluşturmakla aynı şey değil.

Normal bir işlevin aksine, bir sınıf yapıcısı new olmadan çağrılamaz: */

class User2 {

    constructor() { }
}

console.log(typeof User2); // function

User2(); // Hata: Sınıf oluşturucu Kullanıcı 'new' olmadan çağrılamaz

// Ayrıca, çoğu JavaScript motorunda bir sınıf oluşturucusunun dize temsili “sınıf…” ile başlar.

class User3 {

    constructor() { }
}

console.log(User3); // [class User3]

/* 2. Sınıf yöntemleri numaralandırılamaz. Bir sınıf tanımı, "prototip"teki tüm yöntemler için numaralandırılabilir bayrağı false olarak ayarlar.

Bu iyi, çünkü eğer bir nesne üzerinde for..in yaparsak, genellikle onun sınıf yöntemlerini istemiyoruz.

3. Sınıflar her zaman strict(katı) kullanır. Sınıf yapısındaki tüm kodlar otomatik olarak katı(strict) moddadır.

Ayrıca, temel işleyişine ek olarak, sınıf sözdizimi, daha sonra inceleyeceğimiz birçok başka özelliği de beraberinde getirir. */