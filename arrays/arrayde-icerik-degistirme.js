let testik = ["Ankara", "Bursa", "İzmir"];

let mamo = testik;

testik[1] = "Istanbul";

console.log(mamo); // (3) ['Ankara', 'Istanbul', 'İzmir']
console.log(testik); // (3) ['Ankara', 'Istanbul', 'İzmir']

let bbb = [];
let ccc = [];

console.log(bbb === ccc);  // false