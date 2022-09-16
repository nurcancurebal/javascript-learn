/* Non-enumerable
Şimdi user'a toString metodu ekleyelim.

Normalde toString objeler için non-enumerable’dır yani for ile objenin özelliklerini dönerken görünmez. Fakat bu özelliği kendiniz eklerseniz for..in içeriisnde görünür. Şu şekilde: */

let user1 = {

    name: "John",

    toString() {
        return this.name;
    }
};

// Varsayılan olarak, var olan özelliklerimiz görünecektir.
for (let key in user1) console.log(key); // name, toString

/* Eğer beğenmiyorsanız, enumerable:false'u ayarlayabilirsiniz. Böylece for..in döngüsünün içerisinde normalde olduğu gibi görünmez olur: */

let user2 = {

    name: "John",

    toString() {
        return this.name;
    }
};

Object.defineProperty(user2, "toString", {

    enumerable: false
});

// Artık toString görünmeyecektir:
for (let key in user2) console.log(key); // name

// Non-enumerable özellikler de Object.keys'den çıkarılacaktır:

console.log(Object.keys(user2)); // [ 'name' ]