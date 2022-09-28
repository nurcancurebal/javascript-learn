/* -> Bir sözü tekrar çözme?
Aşağıdaki kodun çıktısı nedir? */

let promise = new Promise(function (resolve, reject) {

    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

/* Çıktısı 1.

resolve'a yapılan ikinci çağrı önemsenmez, çünkü sadece ilk red/çözüm dikkate alınır. Diğer çağrılar önemsenmez. */