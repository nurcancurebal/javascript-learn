/* -> Promise.reject (söz ver reddet)
Söz dizimi: */

let promise = Promise.reject(error);

/* error ile reddedilen bir söz oluşturun.

Yukarıdaki ile aynı: */

let promise2 = new Promise((resolve, reject) => reject(error));

// Gerçek kodda nadiren kullanılan, bütünlük için buradayız.