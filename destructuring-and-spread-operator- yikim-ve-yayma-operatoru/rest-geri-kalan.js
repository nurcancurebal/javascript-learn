/* -> The rest(Geri kalan) ‘…’

Yalnızca ilk değerleri almak değil, aynı zamanda aşağıdakileri de toplamak istiyorsak – üç nokta kullanarak “geri kalanını” alan bir parametre daha ekleyebiliriz "...": */

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// rest türü array
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

/* değeri rest, kalan dizi öğelerinin dizisidir. yerine başka herhangi bir değişken adı kullanabiliriz rest, sadece önünde üç nokta olduğundan ve yok etme atamasında sonuncu olduğundan emin olun. */