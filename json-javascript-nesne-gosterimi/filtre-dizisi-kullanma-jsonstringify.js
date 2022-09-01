// Şimdi, ikame ediciyi bir filtre olarak kullanalım. Kullanıcı nesnesinin uzun bir anahtar listesi var ama biz sadece
// birkaçıyla ilgileniyoruz. Örnekte gösterildiği gibi dizide tutmak istediğimiz anahtarları koyuyoruz ve onu replacer'ın
// yerine kullanıyoruz.


const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
};

const txt = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4);

console.log(txt);

// {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayeh",
//     "country": "Finland",
//     "city": "Helsinki",
//     "age": 250
// }