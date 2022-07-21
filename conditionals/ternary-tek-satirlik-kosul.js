// ternary orperators

let israining = true;

israining ? console.log('you need a rain coat.') : console.log('no need for a rain coat');
// true olduğu için ? den sonraki kısım çalıştı



israining = false;

israining ? console.log('you need a rain coat.') : console.log('no need for a rain coat');
// false olduğu için : dan sonraki kısım çalıştı

const date = new Date();

let hour = date.getHours();

let minute = date.getMinutes();

console.log(String(hour < 10 ? `0${hour}` : hour) + ':' + String(minute < 10 ? `0${minute}` : minute));