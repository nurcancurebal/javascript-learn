const dog = {
    name: 'kont',
    legs: 4,
    color: 'black',
    age: 7,
    bark: 'woof woof'
};

console.log(dog);

dog.breed = 'Bulldog';
dog.getDogInfo = 'Barren';

console.log(dog);

console.log(Object.values(dog));