/* Shallow copy (Sığ Kopyalama veya Yüzeysel Kopyalama), Deep Copy (Derin Kopyalama) olarak çevirebiliriz.

Reference veri tiplerini (array, object, function) herhangi bir atama işlemine tabi tutarsak atanan değer orjinal reference veri tipinin bellekteki adresine işaret edeceği için bunun üzerinde bir değişiklik yaptığımızda orjinal değeri de değiştirmiş oluruz. Buna Shallow copy (Sığ Kopyalama veya Yüzeysel Kopyalama) denir.

Detay kopya veya Deep copy terimi ise nesnenin değerlerinin ve tamamnın içerikleri ile kopyalanması ve yeni bellek referansı oluşturulmasını ifade eder.

Derin bir kopya, yeni değişkenin tüm değerlerinin kopyalandığı ve orijinal değişkenden bağlantısının kesildiği anlamına gelir . Yüzeysel bir kopya, belirli (alt) değerlerin hala orijinal değişkene bağlı olduğu anlamına gelir . */

//! orijinal değişiyorsa sığ kopya, orijinal değişmiyorsa derin kopya


/// atama operatörü ilkel veri türlerini derin kopyalar, referans veri türlerini sığ kopyalar


//* Reference veri tipleri için sığ kopya

// 1. Yayılma operatörü

const a = {
    kilo: 100,
    boy: 170
};

let b = { ...a };

b.kilo = 60;

console.log(b.kilo); // 60
console.log(a.kilo); // 100

// 2. Object.assign

const bekar = {
    name: "nurcan",
    kilo: 45
};

let evli = Object.assign({}, bekar);

evli.kilo = 50;

console.log(bekar.kilo); // 45
console.log(evli.kilo); // 50

// 3. Dizi işlevleri - eşleme(map), filtreleme(filter), azaltma(reduce) (yalnızca diziler için)

const num = [1, 2, 3];

let copyNum = num.map(el => el);

copyNum[1] = 4;

console.log(copyNum[1]) // 4
console.log(num[1]) // 2

// 4. Array.slice (yalnızca diziler için)

const no = [1, 2, 3];

let copyNo = no.slice(0);

copyNo[1] = 4

console.log(copyNo[1]) // 4
console.log(no[1]) // 2


//* Reference veri tipleri için derin kopya

// 1. atama operatörü

let person = {
    firstName: "nurcan",
    lastName: "cürebal"
};

let copiedPerson = person;

copiedPerson.firstName = "erdinç";

console.log(person.firstName); // erdinç
console.log(copiedPerson.firstName); // erdinç

// ---------------------
// ÖZEL DURUM:  iç içe geçmiş referans değişkenlerde
// object.assign

let worker = {
    firstName: "nurcan",
    lastName: "cürebal",
    adress: {
        street: "güzelsu sokak",
        city: "istanbul",
        country: "turkey"
    }
};

let copiedWorker = Object.assign({}, worker);

copiedWorker.adress.country = "kanada";
copiedWorker.firstName = "erdinç";

console.log(worker);
/* 
{
    firstName: 'nurcan',
    lastName: 'cürebal',
    adress: { street: 'güzelsu sokak', city: 'istanbul', country: 'kanada' }
} */

console.log(copiedWorker);
/* 
{
    firstName: 'erdinç', //! derin kopya
    lastName: 'cürebal',
    adress: { street: 'güzelsu sokak', city: 'istanbul', country: 'kanada' } //! sığ kopya referansı aynı aldığı için
} */

/* Bunun nedeni ise bellekte iki farklı object adresinin referansı olmasına rağmen orjinal object içerisindeki address property’sinin referans değeri kopyaladığımız object içerisindeki address property’sindeki referans değeriyle aynı olduğu için  */


// 1. bu sorunu yayılma operatörü ile çözebiliriz sığ kopya oluştururuz


const aktivity = {
    foods: {
        dinner: 'Pasta'
    }
}

let copyAktivity = { ...aktivity };

copyAktivity.foods.dinner = 'Soup';

console.log(copyAktivity.foods.dinner) // Soup
console.log(aktivity.foods.dinner) // Soup

// 2. iç içe geçmiş objelerde derin kopya almak istiyorsak JSON

const aktivityTwo = {
    foods: {
        dinner: 'Pasta'
    }
};

let copyAktivityTwo = JSON.parse(JSON.stringify(aktivityTwo));

copyAktivityTwo.foods.dinner = 'Soup';

console.log(copyAktivityTwo.foods.dinner); // Soup
console.log(aktivityTwo.foods.dinner); // Pasta

// ---------------------


//* İlkel veri tipleri için derin kopya

// 1. atama operatörü

let name = "ayşe";

let copiedName = name;

name = "fatma";

copiedName = "ali";

console.log(name); // fatma

console.log(copiedName); // ali


// ---------------------

// BONUS: özel sınıfları derin kopyalama
class Counter {
    constructor() {
        this.count = 5
    }

    copy() {
        const copy = new Counter();
        copy.count = this.count;
        return copy;
    }
}

const originalCounter = new Counter();
const copiedCounter = originalCounter.copy();

console.log(originalCounter.count); // 5
console.log(copiedCounter.count); // 5

copiedCounter.count = 7;

console.log(originalCounter.count); // 5
console.log(copiedCounter.count); // 7

// ---------------------