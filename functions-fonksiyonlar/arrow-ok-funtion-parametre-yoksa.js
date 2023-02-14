// Eğer hiçbir değer yoksa parantez eklenmelidir.

let selamVer = () => console.log("Merhaba!");

selamVer();     // Merhaba!


let yas = 18;

let merhaba = (yas < 18) ?
    () => console.log('MerhabaTwo') :
    () => console.log("Merhabalar!");

merhaba();  // Merhabalar!