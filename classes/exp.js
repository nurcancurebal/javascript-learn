class Animal {

    constructor(name, age, color, legs) {

        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.properties = [];
    };

    getAnimalInfo() {

        return `Hayvanın cinsi ${this.name}' dir. Yaşı ${this.age}. Rengi ${this.color}. Bacak sayısı ${this.legs}`;
    };

    get getName() {

        return this.name;
    };

    set setProperties(property) {

        this.properties.push(property);
    };
};


