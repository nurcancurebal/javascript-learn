const txt = 'Aylik maaştan 4000 euro, yillik 10000 euro ikramiye, ayda 5500 euro online kurs kazaniyor.';

const pattern = /\d+/g; // sayının hepsini aldık

const match = txt.match(pattern);

console.log(match);