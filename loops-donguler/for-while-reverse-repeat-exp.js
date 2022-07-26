const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];


for (let i = 0; i <= 10; i++) {

  console.log('for ile =', countries[i]);

};       // for ile ekrana sırayla yazdırma




let a = 0;

while (a <= 10) {

  console.log('while ile = ', countries[a]);
  a++;

};    // while ile ekrana sırayla yazdırma




let b = 0;

do {

  console.log('do while ile = ', countries[b]);
  b++;

} while (b <= 10);       // do while ile ekrana sırayla yazdırma

countries.reverse();

for (let i = 0; i <= 10; i++) {

  console.log('for ile tersden =', countries[i]); // for ile ekrana tersten sırayla yazdırma
};



let c = 0;

countries.reverse();
countries.reverse();

while (c <= 10) {

  console.log('while ile tersten = ', countries[c]);
  c++;

};       // while ile ekrana tersten sırayla yazdırma



let d = 0;

countries.reverse();
countries.reverse();

do {

  console.log('do while ile tersten = ', countries[d]);
  d++;

} while (d <= 10);       // do while ile ekrana tersten sırayla yazdırma


for (let e = 0; e <= 10; e++) {

  console.log(countries[e].repeat(3));   // yan yana tekrar ettirme
};