let names = Array();

console.log(names); // (0) []

// veya bir dizi aşağıdaki şekildede oluşturulur

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

console.log(arr);
// (5) ['Nurcan', 250, true, {…}, {…}]