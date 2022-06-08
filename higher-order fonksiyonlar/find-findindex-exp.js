const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: 3 },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: 3 },
];

let productsFind = products.find(function (item) {

    return item.price == 3;
});

console.log(productsFind); // { product: 'banana', price: 3 } uyan ilk değer döndü


let productsFindindex = products.findIndex(function (item) {

    return item.price == 3;
});

console.log(productsFindindex); // 0 uya ilk değerin indexini döndürür