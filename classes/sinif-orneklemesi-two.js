// Örnekleme sınıfı, bir sınıftan bir nesne oluşturmak anlamına gelir. new anahtar kelimesine ihtiyacımız var ve sınıfın adını new
// kelimesinden sonra çağırıyoruz.

// Person sınıfımızdan bir dog nesnesi oluşturalım.

class Person {

};
const person = new Person();

console.log(person);    // Person {}

// Gördüğünüz gibi bir kişi nesnesi oluşturduk. Sınıfın henüz herhangi bir özelliği olmadığı için nesne de boştur.

// Sınıf için farklı özellikler iletmek için sınıf yapıcısını kullanalım.