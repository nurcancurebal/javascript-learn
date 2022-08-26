/* Metin kesme
truncate(str, maxlength) fonksiyonu str'nin uzunluğunu kontrol eder. Eğer maxlength'den uzunsa str nin sonunu "..." ile
bitirir ve uzunluğunu maxlength'e kadar getirir.
Fonksiyonun sonucunda eğer gerekliyse metin kesilmelidir. */

console.log(truncate("Size bu konuda söylemek istediğim şey:", 20)); // Size bu konuda sö...

console.log(truncate("Merhaba!", 20)); // = Merhaba!

function truncate(str, maxlength) {

    return (str.length > maxlength) ? str.slice(0, maxlength - 3) + '...' : str;
}