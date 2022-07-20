// Yapıcı, nesnemiz için bir plan oluşturmamızı sağlayan yerleşik bir işlevdir. Yapıcı işlevi, bir anahtar sözcük yapıcısı ile başlar ve
// ardından bir parantez gelir. Parantez içinde nesnenin özelliklerini parametre olarak iletiyoruz. Bu anahtar sözcüğü, yapıcı
// parametrelerini sınıfa eklemek için kullanırız.

// Aşağıdaki Person sınıfı oluşturucu, firstName ve lastName özelliğine sahiptir. Bu özellikler, bu anahtar sözcük kullanılarak Person
// sınıfına eklenir. Bu, sınıfın kendisini ifade eder.


class Person {

    constructor(firstName, lastName) {

        console.log(this);

        this.firstName = firstName;
        this.lastName = lastName;
    };
};

const person = new Person();

console.log(person);

// Person {}
// Person { firstName: undefined, lastName: undefined }


// Nesnenin tüm anahtarları tanımsızdır. Ne zaman somutlaştırsak(başlattığımızda), özelliklerin değerini geçmeliyiz. Sınıfı
// somutlaştırdığımızda(başlattığımızda) şu anda değeri iletelim.