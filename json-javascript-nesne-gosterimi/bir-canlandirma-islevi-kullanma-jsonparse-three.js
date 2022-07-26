// Reviver fonksiyonunu formatlayıcı olarak kullanmak için isim ve soyadı değerini formatlamak istediğimiz tuşları
// koyuyoruz. Diyelim ki JSON verilerinin ad ve soyadını biçimlendirmek istiyoruz.

const usersText = `{
    "users":[
      {
        "firstName":"Nurcan",
        "lastName":"Cürebal",
        "age":27,
        "email":"nurcan@nrc.com"
      },
      {
        "firstName":"Erdinç",
        "lastName":"Cürebal",
        "age":27,
        "email":"erdinç@erd.com"
      },
      {
      "firstName":"Bal",
      "lastName":"Cürebal",
      "age":1,
      "email":"bal@bal.com"
      }
    ]
}`;

const usersObj = JSON.parse(usersText, (key, value) => {

    let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value;

    return newValue;
});

console.log(usersObj);


// {
//     users: [
//       {
//         firstName: 'NURCAN',
//         lastName: 'CÜREBAL',
//         age: 27,
//         email: 'nurcan@nrc.com'
//       },
//       {
//         firstName: 'ERDINÇ',
//         lastName: 'CÜREBAL',
//         age: 27,
//         email: 'erdinç@erd.com'
//       },
//       {
//         firstName: 'BAL',
//         lastName: 'CÜREBAL',
//         age: 1,
//         email: 'bal@bal.com'
//       }
//     ]
//   }