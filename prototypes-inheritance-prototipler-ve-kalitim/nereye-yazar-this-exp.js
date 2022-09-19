/* Nereye yazar?

animaldan türemiş bir rabbit'imizi var.

Eğer rabbit.eat() çağırılırsa hangi obje full özelliğini alır: animal mi yoksa rabbit mi? */

let animal = {

    eat() {

        this.full = true;
    }
};

let rabbit = {

    __proto__: animal
};

rabbit.eat();

/* Cevap: rabbit.

Çünkü this noktadan önceki objeyi verir. Bu durumda rabbit.eat() rabbit üzerinde değişikliğe neden olur.

Özelliğe bakma ve çalıştırma iki ayrı şeydir. rabbit.eat önce prototipte bulunur sonra this=rabbit ile çalıştırılır. */