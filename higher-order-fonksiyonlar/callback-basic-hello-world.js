// Parametre olarak iletilen fonksiyonlara callback denir.

console.log(mainTwo(exapleCallback));

function mainTwo(func) {

    return func();
};

function exapleCallback() {

    return "Hello, World!";
};