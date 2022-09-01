// Bir işlemin ne kadar sürdüğünü takip etmek için kullanabileceğiniz bir zamanlayıcıyı başlatır. Her zamanlayıcıya benzersiz bir ad
// verirsiniz ve belirli bir sayfada 10.000'e kadar zamanlayıcı çalışır. Aynı adla console.timeEnd() öğesini çağırdığınızda, tarayıcı,
// zamanlayıcının başlatılmasından bu yana geçen süreyi milisaniye olarak verir.

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
];

console.time('Regular for loop');

for (let i = 0; i < countries.length; i++) {

    console.log(countries[i][0], countries[i][1]);
};

console.timeEnd('Regular for loop');


console.time('for of loop');

for (const [name, city] of countries) {

    console.log(name, city);
};

console.timeEnd('for of loop');


console.time('forEach loop');

countries.forEach(([name, city]) => {

    console.log(name, city);
});

console.timeEnd('forEach loop');


//  Finland Helsinki
//  Sweden Stockholm
//  Norway Oslo
//  Regular for loop: 0.55908203125 ms
//  Finland Helsinki
//  Sweden Stockholm
//  Norway Oslo
//  for of loop: 0.392822265625 ms
//  Finland Helsinki
//  Sweden Stockholm
//  Norway Oslo
//  forEach loop: 0.524169921875 ms

// Yukarıdaki çıktıya göre, normal for döngüsü, for of veya forEach döngüsünden daha yavaştır.