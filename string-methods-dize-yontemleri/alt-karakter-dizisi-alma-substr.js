/* Verilen uzunluğa bağlı olarak başlangıç'tan uzunluk kadar karakter alır.
Diğer metoda göre bu uzunluğu belirtmemizi sağlar. Diğerleri pozisyonu belirtmemizi sağlıyordu. */

let string = 'JavaScript';

console.log(string.substr(4, 5));  // ekran çıktısı = Scrip 4.karakterden başla 5 karakter uzunluğunda yaz


// -> İlk karakter negatif olabilir. Sondan sayarak:
// sondan sayarken 0' dan değil 1' den saymaya başlarız yani sonuncu karakter 1' dir.

let str = "stringify";

console.log(str.substr(-4, 2)); // gi, 4. pozisyondan 2 karakter al.