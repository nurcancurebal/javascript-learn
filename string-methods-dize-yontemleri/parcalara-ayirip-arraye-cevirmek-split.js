// Karakter dizisini belirtilen karakterden parçalara ayırarak bir dizi oluşturur.

// split(',',3) virgülden ayırır 3 tane array oluşturur gerisini almaz


let adSoyad = "Nurcan Cürebal"; // boşluktan parçalama

let result = adSoyad.split(" ");

console.log(result); // [ 'Nurcan', 'Cürebal' ]


let str = "Maz,da,Op,el,To,yo,ta"; // virgülden parçalama

let resulTwo = str.split(",");

console.log(resulTwo);  // [ 'Maz', 'da', 'Op', 'el', 'To', 'yo', 'ta' ]


let js = 'JavaScript';

const charsInJavaScript = js.split(''); // harf harf parçalama

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]