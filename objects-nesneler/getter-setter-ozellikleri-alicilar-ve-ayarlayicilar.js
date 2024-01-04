/* -> Getter ve Setter Özellikleri ( Alıcılar ve Ayarlayıcılar )
İki türlü özellik mevcuttur.

Bunlardan ilki veri özellikleri. Bunu zaten biliyorsunuz. Aslında şimdiye kadar kullandığınız tüm özellikler veri özellikleri’dir.

İkinci tip özellikler ise erişim özellikleri’dir. Bunlar değerleri almak(get) ve ayarlamak(set) için kullanılan fonksiyonlardır, dışarıdaki koddan sanki bir özellikmiş gibi görünürler. */


/* -> Alıcılar ve Ayarlayıcılar
Erişim özellikleri “alıcı” ve “ayarlayıcı” metodlar ile tanımlanır. Obje içerisinde tam olarak get ve set şeklinde belirtilir: */

let obj = {

    get propName() {
        // obj.propName yazıldığında burası çalışır.
    },

    set propName(value) {
        // ayarlayıcı  obj.propName = value ayarlandığında burası çalışır.
    }
};

/* Alıcı metodlar obj.propName okunduğunda, ayarlayıcı metodlar ise atama yapıldığında çalışır.

Örneğin user1 objemiz olsun ve bunun name ve surname özellikleri olsun: */

/* “fullName” adında bir özellik eklemek istenirse, elbette var olan kodu kopyala yapıştır yapmayacağız bunun yerine erişim özelliği kullanabiliriz: */

let user1 = {

    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(user1.fullName); // John Smith

console.log(user1); // { name: 'John', surname: 'Smith', fullName: [Getter] }


let user2 = {

    name: "John",
    surname: "Smith",

    fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(user2.fullName()); // John Smith

/* Dışardan, bu özellik normal görünür. Aslında fikir de tam olarak budur. Biz user1.fullName 'i fonksiyon olarak çağırmıyoruz. Onu normal bir şekilde özellikmiş gibi okuyoruz. Alıcı perdenin arkasında çalışıyor.

Şu anda fullName'in sadece alıcısı var. Eğer user1.fullName= şeklinde atamaya çalışırsanız hata alırsınız.

Bunu düzeltmek için ayarlayıcı metodu eklemek gerekmektedir: */

let user3 = {

    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// FullName ayarlandı.
user3.fullName = "Alice Cooper";

console.log(user3.name); // Alice
console.log(user3.surname); // Cooper

// Şimdi yeni bir “sanal” özelliğimiz oldu. Okunabiliyor, yazılabiliyor fakat aslında yok.


/* -> Erişim özellikleri sadece get/set ile erişilebilir
Bir özellik ya “veri özelliği” ya da “erişim özelliği” olabilir, aynı anda ikisi olamaz.

Bir özellik get prop() ile veya set prop() ile tanımlanmışsa, artık erişim özelliğidir. Bundan dolayı okuyabilmek için alıcı ve atama yapabilmek için ayarlayıcı olması gerekir.

Bazen sadece ayarlayıcı veya alıcı olabilir. Fakat böyle bir durumda özellik okunabilir veya yazılabilir olmaz. Her ikisinin de yazılmış olması gerekir. */