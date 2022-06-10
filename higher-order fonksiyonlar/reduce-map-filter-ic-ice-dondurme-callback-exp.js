const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

const productsFilter = products.filter(function (filterPrice) {

    return typeof filterPrice.price == 'number';
});

console.log(productsFilter);

const productsMap = productsFilter.map(function (mapProducts) {

    return mapProducts.price;
});

console.log(productsMap);

const productsReduce = productsMap.reduce(function (reduceProducts, currentValue) {

    return reduceProducts + currentValue;
}, 0);

console.log(productsReduce);