/* -> Metodlar ve prototipler
Bu bölümde prototipler ile çalışmak için ek metodlardan bahsedeceğiz

Bizim bildiğimizin haricinde prototipi ayarlamak ve almak için başka yöntemler de bulunmaktadır:

. Object.create(proto[, descriptors]) – verilen proto'yu [[Prototype]] şeklinde alarak ve opsiyonel tanımlayıcı özelliği kullanarak boş bir obje oluşturur.
. Object.getPrototypeOf(obj) – obj'nin [[Prototype]]'ını döndürür.
. Object.setPrototypeOf(obj, proto) – obj'nin [[Prototype]]'ını proto'ya ayarlar.
Örneğin: */

let animal1 = {

    eats: true
};

let rabbit1 = Object.create(animal1); // animal1 prototipi ile yeni bir rabbit1 objesi yaratma.

console.log(rabbit1.eats); // true

console.log(Object.getPrototypeOf(rabbit1) === animal1); // true , rabbit1'in prototipini alma

Object.setPrototypeOf(rabbit1, {}); // rabbit1'in prototipini {}'e çevirme.

/* Object.create opsiyonel olarak ikinci bir argümana sahiptir: özellik tanımlayıcı. Aşağıdaki gibi yeni objeye özellikler ekleyebiliriz: */

let animal2 = {

    eats: true
};

let rabbit2 = Object.create(animal2, {

    jumps: {
        value: true
    }
});

console.log(rabbit2.jumps); // true

/* Tanımlayıcıların Özellik bayrakları ve tanımlayıcılar bölümünde üstünden geçilmiştir. Formatları aynıdır. Object.create kullanarak obje klonlama işlemini yapabiliriz. Bu objenin özelliklerini for..in ile dolanmaktan daha etkin bir yöntemdir. */

// Objenin yüzeysel klonu
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

/* Bu tam olarak obj'nin aynısını verir. Tüm özellikler: dönülebilir veya dönülemez, veri özellikleri, alıcı ve ayarlayıcılar – her şey, ayrıca doğru [[Prototype]] ile */