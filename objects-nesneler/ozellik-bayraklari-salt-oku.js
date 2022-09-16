/* -> Salt Oku
user1.name'i sadece okunabilir yapmak için writable bayrağının değiştirilmesi gerekir. */

let user1 = {

    name: "John"
};

Object.defineProperty(user1, "name", {

    writable: false
});

user1.name = "Pete"; // Error: Salt okunur özelliğe değer atanamaz.

/* Artık kimse kendi defineProperty metodunu yazmadıkça kullanıcının ismini değiştiremez.

Aynı işlem bir özellik olmadığı durumda: */

let user2 = {};

Object.defineProperty(user2, "name", {

    value: "Pete",
    // yeni özellikler için neyin doğru olduğu  özellikle belirtilmelidir.
    enumerable: true,
    configurable: true
});

console.log(user2.name); // Pete

user2.name = "Alice"; // Error