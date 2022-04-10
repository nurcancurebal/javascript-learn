// fonksiyon yazmanın bir alternatifi, arrow= ok fonksiyonu denir


// normal function(regular function)

function hello(name) {

    return `Merhaba ${name}`;

};

console.log(hello('Nurcan'));


// arrow (ok) function 

const hello2 = name => `Merhaba ${name}`;  // tek bir değişken varsa paranteze gerek yok ve tek satırlık bir işlem ise return ve süslü parantez yazmaya gerek yok

console.log(hello2('Erdinç'));


function hello3(name, surname) {

    return `Merhaba ${name} ${surname}`;

};

console.log(hello3('Nurcan', 'cürebal'));


// arrow function

const hello4 = (name, surname) => `Merhaba ${name} ${surname}`;

console.log(hello4('Erdinç', 'cürebalycy'));