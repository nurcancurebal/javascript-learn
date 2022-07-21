// console.table() yöntemi, verileri konsolda bir tablo olarak görüntüler. Tablo verilerini tablo olarak görüntüler. Console.table(),
// bir dizi veya nesne olması gereken bir gerekli bağımsız değişken verisini ve bir ek isteğe bağlı parametre sütununu alır.

// Öncelikle basit bir dizi ile başlayalım. Aşağıdaki kod, iki sütunlu bir tablo görüntüler. Biri index sütunu diğeri values sütunu.
// İndex sütununda indexler görünür values sütununda isimler

const names = ['Asabeneh', 'Brook', 'David', 'John'];

console.table(names);

// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │ 'Asabeneh' │
// │    1    │  'Brook'   │
// │    2    │  'David'   │
// │    3    │   'John'   │
// └─────────┴────────────┘


// Ayrıca bir nesnenin sonucunu kontrol edelim. Bu, iki sütunlu bir tablo oluşturur: anahtarları içeren bir index sütunu ve nesnenin
// değerlerini içeren bir Values(değerler) sütunu.

const user = {
    name: 'Nurcan',
    title: 'Programmer',
    country: 'Canada',
    city: 'Ottava',
    age: 27
};

console.table(user);

// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │  name   │   'Nurcan'   │
// │  title  │ 'Programmer' │
// │ country │   'Canada'   │
// │  city   │   'Ottava'   │
// │   age   │      27      │
// └─────────┴──────────────┘


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
];

console.table(countries);

// ┌─────────┬───────────┬─────────────┐
// │ (index) │     0     │      1      │
// ├─────────┼───────────┼─────────────┤
// │    0    │ 'Finland' │ 'Helsinki'  │
// │    1    │ 'Sweden'  │ 'Stockholm' │
// │    2    │ 'Norway'  │   'Oslo'    │
// └─────────┴───────────┴─────────────┘


const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
];

console.table(users);

// ┌─────────┬────────────┬──────────────┬───────────┬──────────────┬─────┐
// │ (index) │    name    │    title     │  country  │     city     │ age │
// ├─────────┼────────────┼──────────────┼───────────┼──────────────┼─────┤
// │    0    │ 'Asabeneh' │ 'Programmer' │ 'Finland' │  'Helsinki'  │ 250 │
// │    1    │   'Eyob'   │  'Teacher'   │ 'Sweden'  │   'London'   │ 25  │
// │    2    │   'Asab'   │ 'Instructor' │ 'Norway'  │    'Oslo'    │ 22  │
// │    3    │  'Matias'  │ 'Developer'  │ 'Denmark' │ 'Copenhagen' │ 28  │
// └─────────┴────────────┴──────────────┴───────────┴──────────────┴─────┘