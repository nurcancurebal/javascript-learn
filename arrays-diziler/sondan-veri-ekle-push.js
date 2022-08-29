//push() arraya sondan veri ekler

let name = ['nurcan', 'erdinç', 'ayşe', 42];

name.push('ahmet', 58, { name: 'tarkan' });

console.log(name);

//(7) ['nurcan', 'erdinç', 'ayşe', 42, 'ahmet', 58, {…}]


// push ve unshift metodları aynı anda birden fazla eleman ekleyebilirler:

let meyveler = ["Elma"];

meyveler.push("Portakal", "Armut");
meyveler.unshift("Ananas", "Limon");

console.log(meyveler); // ["Ananas", "Limon", "Elma", "Portakal", "Armut"]