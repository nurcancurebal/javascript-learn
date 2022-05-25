//! koşulu sağlayan İLK değeri döndürür

const numbers = [1, 2, 5, 7, 9, 17, 20];

const users = [
    {
        id: 1,
        name: 'Nurcan',
        age: 27,
    },
    {
        id: 2,
        name: 'Erdinç',
        age: 27
    },
    {
        id: 3,
        name: 'Bal',
        age: 1
    }];

console.log(numbers.find(function (num) {
    
   return num <10;
}));    // 1

console.log(users.find(function (ages) {

   return ages.age === 27;   
}));    // { id: 1, name: 'Nurcan', age: 27 }