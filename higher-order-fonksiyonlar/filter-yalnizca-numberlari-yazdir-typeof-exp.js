const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

let numberProducts = products.filter(function (num) {

    let numPrice = typeof num.price;
    
    return numPrice == 'number';
});

console.log(numberProducts);