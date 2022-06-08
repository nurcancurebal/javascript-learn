// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

const itemProduct = products.forEach(function (item) {

    console.log(Object.values(item)[0].split(' '));
});

// [ 'banana' ]
// [ 'mango' ]
// [ 'potato' ]
// [ 'avocado' ]
// [ 'coffee' ]
// [ 'tea' ]

// TODO