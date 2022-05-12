// Object.freeze() metodu, bir nesneyi(objeyi) dondurur. Dondurulan bir nesne artık değiştirilemez; bir nesneyi dondurmak, ona yeni özelliklerin
// eklenmesini, mevcut özelliklerin kaldırılmasını, mevcut özelliklerin numaralandırılabilirliğini, yapılandırılabilirliğini veya
// yazılabilirliğini değiştirmeyi ve mevcut özelliklerin değerlerinin değiştirilmesini engeller. Ayrıca bir nesnenin dondurulması,
// prototipinin değiştirilmesini de engeller. frost(), iletilen nesnenin aynısını döndürür.

const person = {
    firstName: 'Nurcan',
    age: 27,
    country: 'Canada',
    city: 'Ottova',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
};

Object.freeze(person);  // bu kodu burada yazdırınca country Canada olarak sabitliyor

console.log(person);

person.country = 'Ireland';

console.log(person);

Object.freeze(person);  // bu kodu burada kullanınca country Ireland olarak sabitliyor

console.log(person);