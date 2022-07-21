let ad = 'nurcan';

console.log(ad.length < 7 ? "kücük" : "büyük"); // kücük


let adin = 'nurcan';
let soyadin = 'cürebal';

console.log(adin.length > soyadin.length ? 'Nurcan adın cürebal soyadından uzun' : 'Nurcan adın cürebal soyadından kısa');
// Nurcan adın cürebal soyadından kısa


let myAge = 11;
let yourAge = 55;

console.log(myAge > yourAge ? `Benim yaşım senin yaşından ${myAge - yourAge} yaş büyük` : `Benim yaşım senin yaşından ${yourAge - myAge} yaş küçük`);



const date = new Date();

let hour = date.getHours();
let minute = date.getMinutes();


console.log(String(hour < 10 ? `0${hour}` : hour) + ':' + String(minute < 10 ? `0${minute}` : minute));