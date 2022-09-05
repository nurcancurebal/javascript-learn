let date1970 = new Date().getFullYear() - new Date(0).getFullYear();

console.log(date1970); // 1970 den bugune kaç yıl geçmiş

let timestamp1970 = new Date().getTime() / 1000 / 60 / 60 / 24 / 365; // 1970 den bugune kaç yıl geçmiş

console.log(timestamp1970);


const year = 365 * 24 * 60 * 60 * 1000 * 53; // milisaniye cinsinden bir yılda geçen zamanla 53 yılı çarptık

const time1971 = new Date(0).getTime() + year; // 1970 + year milisaniye cinsinden

console.log(new Date(time1971).getFullYear()); // 2022