let name = ['nurcan', 27, 'erdinç', '42', 'bal köpüğü'];

name.unshift('istanbul'); // başına eleman ekledim


name.push('aşk'); // sonuna eleman ekledim

console.log(name);


// push ve unshift metodları aynı anda birden fazla eleman ekleyebilirler:

let meyveler = ["Elma"];

meyveler.push("Portakal", "Armut");
meyveler.unshift("Ananas", "Limon");

console.log(meyveler); // ["Ananas", "Limon", "Elma", "Portakal", "Armut"]