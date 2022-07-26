const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

const productsSome = products.some(function (item) {

    return item.price < 7;
});

console.log(productsSome); // true, bir tanesi 7' den küçük olursa true döner


const productsEvery = products.every(function (item) {

    return item.price < 7;
});

console.log(productsEvery); // false, hepsi 7' den küçük olsaydı true dönecekti