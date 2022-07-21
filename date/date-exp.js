const date = new Date();
let year = date.getFullYear();
let mounth = date.getMonth();//!eğer ayı sayı ile gösterirsek mounth = mounth+1; ifadesini eklememiz gerek çünkü getMounth 0 dan başlar ocak=0'dır
let dayNumber = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let day = date.getDay();

let months = [
    'ocak',
    'şubat',
    'mart',
    'nisan',
    'mayıs',
    'haziran',
    'temmuz',
    'ağustos',
    'eylül',
    'ekim',
    'kasım',
    'aralık'
];


let days = [
    'pazar',
    'pazartesi',
    'salı',
    'çarşamba',
    'perşembe',
    'cuma',
    'cumartesi'
];

let dateTime = ` ${dayNumber} ${months[mounth]} ${year} ${days[day]} ${hour}:${minute}:${second} `;

console.log(dateTime);

let dateTimeTwo = `${year} - ${months[mounth]} - ${dayNumber}  ${hour}:${minute}`;

console.log(dateTimeTwo);