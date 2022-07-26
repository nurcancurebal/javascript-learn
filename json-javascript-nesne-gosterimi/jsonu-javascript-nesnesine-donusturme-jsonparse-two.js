// Çoğunlukla JSON verilerini HTTP yanıtından veya bir dosyadan alırız, ancak JSON'u bir dize olarak saklayabiliriz ve
// gösterim amacıyla Object olarak değiştirebiliriz. JavaScript'te JSON anahtar sözcüğü, parse() ve stringify()
// yöntemlerine sahiptir. JSON'u bir nesneye dönüştürmek istediğimizde JSON.parse() kullanarak JSON'u ayrıştırırız.
// Nesneyi JSON olarak değiştirmek istediğimizde JSON.stringify() kullanırız.


// JSON.parse(json[, reviver]);
// json veya metin, veri
// reviver, isteğe bağlı bir geri arama işlevidir
// JSON.parse(json, (key, value) => {   })


const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
}`;

const usersObj = JSON.parse(usersText, undefined, 4);

console.log(usersObj);

// {
//   users: [
//     {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh',
//       age: 250,
//       email: 'asab@asb.com'
//     },
//     {
//       firstName: 'Alex',
//       lastName: 'James',
//       age: 25,
//       email: 'alex@alex.com'
//     },
//     {
//       firstName: 'Lidiya',
//       lastName: 'Tekle',
//       age: 28,
//       email: 'lidiya@lidiya.com'
//     }
//   ]
// }