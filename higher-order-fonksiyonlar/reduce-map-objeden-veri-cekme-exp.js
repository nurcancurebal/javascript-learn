const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

const itemProduct = products.reduce(function (store, item, index) { // reduce index 1 den başlıyor

    if (index === 1) {

        return [store.product, item.product];

    } else {

        return [...store, item.product];
    }
});

console.log(itemProduct);



const mapProducts = products.map(function (newProduct) {

    return newProduct.product
});

console.log(mapProducts);