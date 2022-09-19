/* -> Erişim Tanımlayıcıları
Erişim tanımlayıcıları normal veri özelliklerine göre daha farklıdır. Erişim özellikleri için deger ve yazılabilir yoktur, bunun yerine get ve set fonksiyonları vardır.

Öyleyse erişim tanımlayıcıları şunlara sahiptir:

. get – parametresi olmayan fonksiyon, sadece özellik okunduğunda çalışır.
. set – bir parametreli fonksiyon, özellik ayarlanmak istendiğinde çalışır.
. enumerable – bu veri özellikleri ile aynıdır.
. configurable – bu veri özellikleri ile aynıdır.

Örneğin fullName ve definePropery erişim tanımlayıcıları için get ve set'i iletebiliriz. */

let user = {
    name: "John",
    surname: "Smith"
};

Object.defineProperty(user, 'fullName', { // Bayrakları değiştirmek için Object.defineProperty kullanılabilir.
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(user.fullName); // John Smith

for (let key in user) console.log(key); // name, surname

/* Tekrar hatırlatmakta fayda var, bir özelliklik ya erişim özelliği veya veri özelliği olabilir, ikisi aynı anda olamaz.

Aynı tanımlayıcıda eğer hem get hem de value değerini kullanırsak aşağıdaki hata meydana gelir: */

// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
    get() {
        return 1
    },

    value: 2
});