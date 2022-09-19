/* -> Uyumluluk için kullanma
Getter/setter fikrinin amacı aslında “normal” veri özelliklerinin kontrolünü her an elde tutabilmektir.

Örneğin, kullanıcı objesini name ve age özellikleri ekleyelim: */

function User1(name, age) {

    this.name = name;
    this.age = age;
}

let john1 = new User1("John", 25);

console.log(john1.age); // 25

/* … Bu ilerde muhtemeldir değişebilir. Örneğin age yerine ileride birthday verisi tutmak istebiliriz, böylece daha kesin yaş bilgisi tutulabilir: */

function User2(name, birthday) {

    this.name = name;
    this.birthday = birthday;
}

let john2 = new User2("John", new Date(1992, 6, 1));

console.log(john2); // User2 { name: 'John', birthday: 1992-06-30T21:00:00.000Z }

/* Peki eski age özelliği ne olacak ?

Her yerde bunu arayıp düzeltebiliriz, fakat bu zaman alır ve kod başkaları tarafından yazıldıysa zor olur. Ayrıca user objesinin içinde age özelliği pek de fena bir fikir sayılmaz, değil mi? Aslında bazı yerlerde tam da istediğimiz age'dir.

age için bir getter yazmak aslında bu problemi ortadan kaldırır. */

function User3(name, birthday) {

    this.name = name;
    this.birthday = birthday;

    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john3 = new User3("John", new Date(1992, 6, 1));

console.log(john3.birthday); // 1992-06-30T21:00:00.000Z
console.log(john3.age);      // 30

// Şimdi eski kod da çalışır, ayrıca yeni bir özelliğe de sahip olmuş oluruz.