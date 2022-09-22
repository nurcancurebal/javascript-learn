/* Statikler miras alınır, Parent.method'a Child.method olarak erişebiliriz.
Örneğin, aşağıdaki koddaki Animal.compare kalıtsaldır ve Rabbit.compare olarak erişilebilir: */

class Animal {

    constructor(name, speed) {

        this.speed = speed;
        this.name = name;
    }

    run(speed = 0) {

        this.speed += speed;

        console.log(`${this.name} runs with speed ${this.speed}.`); // Black Rabbit runs with speed 5.
    }

    static compare(animalA, animalB) {

        return animalA.speed - animalB.speed;
    }

}

// Inherit from Animal
class Rabbit extends Animal {

    hide() {

        console.log(`${this.name} hides!`);
    }
}

let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run();