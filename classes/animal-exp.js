class Animal {
    constructor(name, age, color, legs) {

        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.properties = [];
    };

    getAnimalInfo() {

        return `Hayvanın türü ${this.name}' dir. Yaşı ${this.age}. Rengi ${this.color}. Bacak sayısı ${this.legs}.`;
    };

    get getName() {

        return this.name;
    };

    set setProperties(property) {

        this.properties.push(property);
    };
};


class Dog extends Animal {
    constructor(name, age, color, legs, genus) {

        super(name, age, color, legs);

        this.genus = genus;
    };

    saySomething() {

        return 'I am a sweet dog';
    };

    getAnimalInfo() {

        return `Hayvanın türü ${this.name}' dir. Yaşı ${this.age}. Rengi ${this.color}. Bacak sayısı ${this.legs}. Cinsi ${this.genus}.`;
    };
};

const s1 = new Dog("Dog", 3, "Black", 4, "Terrier");

s1.setProperties = "pet dog";
s1.setProperties = "does not bark";
s1.setProperties = "doesn't bite";


class Cat extends Animal {
    constructor(name, age, color, legs, genus) {

        super(name, age, color, legs);

        this.genus = genus;
    };

    saySomething() {

        return 'I am a sweet cat';
    };

    getAnimalInfo() {

        return `Hayvanın türü ${this.name}' dir. Yaşı ${this.age}. Rengi ${this.color}. Bacak sayısı ${this.legs}. Cinsi ${this.genus}.`;
    };
};

const s2 = new Cat("Cat", 2, "Grey", 4, "British Shorthair");

s2.setProperties = "pet cat";
s2.setProperties = "doesn't scratch";
s2.setProperties = "doesn't bite";


console.log(s1);    // inheritance ile oluşturulan yeni obje
console.log(s1.getAnimalInfo());    // overriding ile functionı düzenleme
console.log(s1.getName);    // get ile çağırma
console.log(s1.properties); // set ile ekleme
console.log(s1.saySomething()); // inheritance ile yeni function ekleme

console.log(s2);
console.log(s2.getAnimalInfo());
console.log(s2.getName);
console.log(s2.properties);
console.log(s2.saySomething());


// Dog {
//     name: 'Dog',
//     age: 3,
//     color: 'Black',
//     legs: 4,
//     properties: [ 'pet dog', 'does not bark', "doesn't bite" ],
//     genus: 'Terrier'
//   }
//   Hayvanın türü Dog' dir. Yaşı 3. Rengi Black. Bacak sayısı 4. Cinsi Terrier.
//   Dog
//   [ 'pet dog', 'does not bark', "doesn't bite" ]
//   I am a sweet dog
// Cat {
//     name: 'Cat',
//     age: 2,
//     color: 'Grey',
//     legs: 4,
//     properties: [ 'pet cat', "doesn't scratch", "doesn't bite" ],
//     genus: 'British Shorthair'
//   }
//   Hayvanın türü Cat' dir. Yaşı 2. Rengi Grey. Bacak sayısı 4. Cinsi British Shorthair.
//   Cat
//   [ 'pet cat', "doesn't scratch", "doesn't bite" ]
//   I am a sweet cat