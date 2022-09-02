let dizin = Array(5);

console.log(dizin); //array oluşturmanın bir yoludur farkı ise arrayin içine sayı yazabiliyor olmamız

// These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift


//.fill() = içine yazılan değer tekrar edilir arrayin içindeki sayı kadar

let names = Array(5).fill('loading');

console.log(names); //(5) ['loading', 'loading', 'loading', 'loading', 'loading']