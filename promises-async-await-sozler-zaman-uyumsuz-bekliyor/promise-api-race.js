/* -> Promise.race
Promise.all benzer şekilde sözler yenilenebilir. Ancak hepsinin bitmesini beklemek yerine ilk sonucu (veya hatayı) bekler ve devam eder. */

let promise = Promise.race(iterable);

// Mesela burada sonuç 1 olacak:

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1

/* Böylece ilk sonuç/hata bütün Promise.race sonucu olur. İlk kararlaştırılan sözün ardından “yarışı kazanır”, diğer tüm sonuçlar/hatalar göz ardı edilir */