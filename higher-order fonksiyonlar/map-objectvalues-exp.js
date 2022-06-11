const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

const productPrice = products.map(function (corresponding) {

    const valuesProducts = Object.values(corresponding);

    return `${valuesProducts[0]} = ${valuesProducts[1]}`;
});

console.log(productPrice);