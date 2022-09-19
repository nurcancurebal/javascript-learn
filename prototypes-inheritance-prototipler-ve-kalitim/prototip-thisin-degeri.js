/* -> “this”'in değeri
Aklınıza şöyle bir soru gelebilir. set fullName(value) içerisinde this'in değeri nedir? this.name ve this.surname yazılan yerlerde admin mi yoksa user mı kullanılır?

Cevap basittir: this prototip tarafından hiçbir şekilde etkilenmez.

Metodun bulunduğu yerin önemi olmaksızın, metod çağrısında this her zaman noktadan önceki bölümdür.

Öyleyese aslında ayarlayıcı admin'i this olarak kullanır. user'ı değil.

Çok büyük bir objeye ve buna ait birçok metoda, kalıtıma sahip olabileceğimizden dolayı bu aslında çok önemli bir olaydır. Sonrasında büyük objenin değil kalıtılmış objelerin metodlarını çalıştırabilir ve bunların özelliklerini değiştirebiliriz.

Örneğin burada animal aslında “metod deposu”'nu temsil etmektedir. rabbit ise bunu kullanır.

rabbit.sleep() çağrısı rabbit üzerinde this.isSleeping'i ayarlar: */

// animal metodları
let animal = {

    walk() {

        if (!this.isSleeping) {

            console.log(`I walk`);
        }
    },

    sleep() {

        this.isSleeping = true;
    }
};

let rabbit = {

    name: "White Rabbit",

    __proto__: animal
};

// rabbit.isSleeping'i modifiye eder.
rabbit.sleep(); // rabbitin içine isSleeping ekleniyor true olarak

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (prototipte böyle bir özellik bulunmamaktadır.)

/* Eğer bird, sname gibi animal'dan miras alan objelere sahip olsaydık bunlar da animal'in metodlarına erişebilirlerdi. Fakat her metoddaki this bağlı bulunduğu objeye göre çalışırdı. Yani noktadan önceki metoda göre, animal'e göre değil. Bundan dolayı ne zaman this'e veri yazılsa o objelerin içerisine yazılır.

Sonuç olarak metodlar paylaşılsa bile objelerin durumları paylaşılmaz. */