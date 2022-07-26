// Console.group(), farklı günlük gruplarını gruplandırmaya yardımcı olabilir. Aşağıdaki kodu kopyalayın ve tarayıcı konsolunda gruplara yapıştırın.

const names = ['Nurcan', 'Erdinç', 'Bal', 'Cürebal'];

console.group('Names');
console.log(names);
console.groupEnd();


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
];

console.group('Countries');
console.log(countries);
console.groupEnd();


const user = {
    name: 'Nurcan',
    title: 'Programmer',
    country: 'Canada',
    city: 'Ottava',
    age: 27
};

const users = [
    {
        name: 'Nurcan',
        title: 'Programmer',
        country: 'Canada',
        city: 'Ottava',
        age: 27
    },
    {
        name: 'Erdinç',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Bal',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Timur',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
];

console.group('Users');
console.log(user);
console.log(users);
console.groupEnd();

// Names
//   [ 'Nurcan', 'Erdinç', 'Bal', 'Cürebal' ]
// Countries
//   [
//     [ 'Finland', 'Helsinki' ],
//     [ 'Sweden', 'Stockholm' ],
//     [ 'Norway', 'Oslo' ]
//   ]
// Users
//   {
//     name: 'Nurcan',
//     title: 'Programmer',
//     country: 'Canada',
//     city: 'Ottava',
//     age: 27
//   }
//   [
//     {
//       name: 'Nurcan',
//       title: 'Programmer',
//       country: 'Canada',
//       city: 'Ottava',
//       age: 27
//     },
//     {
//       name: 'Erdinç',
//       title: 'Teacher',
//       country: 'Sweden',
//       city: 'London',
//       age: 25
//     },
//     {
//       name: 'Bal',
//       title: 'Instructor',
//       country: 'Norway',
//       city: 'Oslo',
//       age: 22
//     },
//     {
//       name: 'Timur',
//       title: 'Developer',
//       country: 'Denmark',
//       city: 'Copenhagen',
//       age: 28
//     }
//   ]