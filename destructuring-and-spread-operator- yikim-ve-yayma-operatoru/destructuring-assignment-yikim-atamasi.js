/* -> yıkım ataması

Nesneler, veri öğelerini anahtara göre depolayan tek bir varlık oluşturmamıza izin verir ve diziler, veri öğelerini sıralı bir koleksiyonda toplamamıza izin verir.

Ancak bunları bir fonksiyona aktardığımızda, bir bütün olarak bir nesneye/diziye değil, tek tek parçalara ihtiyaç duyabilir.

Yıkıcı atama , bazen daha uygun olduğu için dizileri veya nesneleri bir dizi değişkene "açmamıza" izin veren özel bir sözdizimidir. Yıkım ayrıca birçok parametreye, varsayılan değerlere vb. sahip karmaşık işlevlerle de harika çalışır. */


/* -> dizi yok etme(Array destructuring)
Dizinin değişkenler halinde nasıl tahrip edildiğine bir örnek: */

let arr = ["Ilya", "Kantor"];

let [firstName, surname] = arr;

console.log(firstName); // Ilya
console.log(surname);  // Kantor

/* Artık dizi üyeleri yerine değişkenlerle çalışabiliriz.

splitDiğer dizi döndürme yöntemleriyle veya diğer dizi döndürme yöntemleriyle birleştirildiğinde harika görünür : */

let [firstName2, surname2] = "Nurcan Cürebal".split(' ');

console.log(firstName2, surname2); // Nurcan Cürebal


/* -> “Yıkıcı(Destructuring)”, “yıkıcı” anlamına gelmez.
Öğeleri değişkenlere kopyalayarak "yıkıcı hale getirdiği" için "yıkıcı atama" olarak adlandırılır. Ancak dizinin kendisi değiştirilmez.

Yazmanın sadece daha kısa bir yolu: */

let arr2 = ["Timur", "Cürebal"];

// let [firstName, surname] = arr;
let firstName3 = arr2[0];
let surname3 = arr2[1];

console.log(firstName3, surname3); // Timur Cürebal


/* -> Öğeleri virgül kullanarak yoksay
Dizinin istenmeyen öğeleri de fazladan bir virgülle atılabilir: */

let [firstName4, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title); // Consul

/* Yukarıdaki kodda, dizinin ikinci öğesi atlanır, üçüncüsü öğesine atanır titleve dizi öğelerinin geri kalanı da (bunlar için değişken olmadığından) atlanır. */


/* -> Sağ tarafta herhangi bir yinelenebilir ile çalışır
…Aslında, onu sadece dizilerle değil, herhangi bir yinelenebilir durumda kullanabiliriz: */

let [a, b, c] = "abc";

console.log(a, b, c); // a b c

let [one, two, three] = new Set([1, 2, 3]);

console.log(one, two, three); // 1 2 3


/* -> Sol taraftaki herhangi bir şeye ata
Sol tarafta herhangi bir “atanabilir” kullanabiliriz.

Örneğin, bir nesne özelliği: */

let user = {};

[user.name, user.surname] = "Erdinç Cürebal".split(' ');

console.log(user); // { name: 'Erdinç', surname: 'Cürebal' }


/* -> .entries() ile döngü
Önceki bölümde Object.entries(obj) yöntemini görmüştük.

Bir nesnenin anahtarları ve değerleri üzerinde döngü oluşturmak için onu yok etme ile birlikte kullanabiliriz: */

let user2 = {
    name: "John",
    age: 30
};

for (let [key, value] of Object.entries(user2)) {

    console.log(`${key}: ${value}`);
}
// name: John
// age: 30

// …Ve aynısı bir harita için:

let user3 = new Map();
user3.set("name", "Bal");
user3.set("age", "30");

for (let [key, value] of user3) {

    console.log(`${key}:${value}`);
}
// name:Bal
// age:30