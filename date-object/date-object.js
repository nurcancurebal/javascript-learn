//  Method        Description Examples
//getFullYear()     (yyyy)      2022
// getMounth()      (0-11)      0   (aylar sıfırdan başlamayacağı için sayı olarak gösterildiğinde +1 eklenir)
// getDate()        (1-31)      4
//getHours()        (0-23)      0
//getMinutes()      (0-59)      56
//getSeconds()      (0-59)      41
//getMilisecond()   (0-999)     341
//getTime()         (miliseconds since january 1, 1970)   1578092201341
//getDay            (0-6)       6 (pazar gününü 0 alır)


// const datee = new Date()
// console.log(datee.getFullYear()) // 2022
// console.log(datee.getMonth())   // 2
// console.log(datee.getMinutes())  //59

const date = new Date();

let year = date.getFullYear(),
    mounth = date.getMonth(),
    dayNumber = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    Second = date.getSeconds(),
    day = date.getDay();

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

let humanreadabledate = `${dayNumber} ${months[mounth]} ${year}, ${days[day]} ${hour}:${minute}:${Second}`;

console.log(humanreadabledate); // 21 nisan 2022, perşembe 14:35:35


console.log(String(hour < 10 ? `0${hour}` : hour) + ':' + String(minute < 10 ? `0${minute}` : minute)); // 02:05 sıfır koyduk başına