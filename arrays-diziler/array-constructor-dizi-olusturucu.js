let names = Array();

console.log(names); // (0) [] boş bir array oluşturduk


const eightEmptyValues = Array(8);

console.log(eightEmptyValues); // [empty x 8]


let namesTwo = [];

console.log(namesTwo) // (0) [];


let namesThree = [
    'nurcan', 27, 'erdinç', 26, 'yazılımcı'
];

console.log(namesThree.length); // 5


// arrayin içerisinde obje tutabiliriz, objenin içindede array tutabiliriz

const arr = [
    'Nurcan',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },     // obje satırı
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] } // objenin içerisinde array
];

console.log(arr);   // (5) ['Nurcan', 250, true, {…}, {…}]



let bbb = [];
let ccc = [];

console.log(bbb === ccc);  // false

// boş iki array birbirine denk değildir