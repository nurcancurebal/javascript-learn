let month = 'May';

month = String(month).toLowerCase(); //büyük küçük harf duyarlılığını kapattık


if (month == 'september' || month == 'october' || month == 'november') {

    console.log('the season is Autumn.');

} else if (month == 'december' || month == 'january' || month == 'february') {

    console.log('the season is Winter.');

} else if (month == 'march' || month == 'april' || month == 'may') {

    console.log('the season is Spring.');

} else if (month == 'june' || month == 'july' || month == 'august') {

    console.log('the season is Summer');

} else {

    console.log('ay bulunamadı');
};

let cikar = "mayis";

cikar = cikar[0].toUpperCase() + cikar.slice(1);

console.log(cikar);  // sıfırıncı karakteri büyülttü ayis' ın önüne yazdı.