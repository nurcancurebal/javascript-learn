const txt = 'Aylik maaştan 4000 euro, yillik 10000 euro ikramiye, ayda 5500 euro online kurs kazaniyor.';

const pattern = /\d+/g; // sayının hepsini aldık

const match = txt.match(pattern);   // (3) ['4000', '10000', '5500'] //! array olarak aldı ancak arrayin içindekiler string

let result = match[0] * 12;

result += Number(match[1]);

let resultTwo = match[2] * 12;

result += resultTwo;

console.log(`Kişinin yillik geliri: ${result}`);