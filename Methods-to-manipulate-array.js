let dizin= Array(5)

console.log(dizin) //array oluşturmanın bir yoludur farkı ise arrayin içine sayı yazabiliyor olmamız

// These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift


//.fill() = içine yazılan değer tekrar edilir arrayin içindeki sayı kadar

let names= Array(5).fill ('loading') 

console.log(names) //(5) ['loading', 'loading', 'loading', 'loading', 'loading']

// concat() = iki arrayi birleştirmek istediğimiz zaman

const firstList=[1, 2, 3]
const secondList= [4, 5, 6]
const thirdList=[7, 8, 9, 10, 20]
const fourth= firstList.concat(thirdList, secondList, [30, 50, 60, 74])
console.log(fourth)   // (11) [1, 2, 3, 7, 8, 9, 10, 20, 4, 5, 6, 30, 50, 60, 74]