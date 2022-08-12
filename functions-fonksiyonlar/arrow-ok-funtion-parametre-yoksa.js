// Eğer hiçbir değer yoksa parantez eklenmelidir. (Bir değer olduğunda yukarıdaki gibi kullanılabilir.)

let selamVer = () => console.log("Merhaba!");

selamVer();     // Merhaba!


let yas = 18;

let merhaba = (yas < 18) ?
    () => console.log('MerhabaTwo') :
    () => console.log("Merhabalar!");

merhaba();  // Merhabalar!