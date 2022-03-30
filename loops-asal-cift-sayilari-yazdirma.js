//   for(i=0; i<=100; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }       // çift sayıları yazdırdık



//  for (a=0; a<=100; a++){
//     if (a%2==0){
//     } else{
//         (console.log(a))}
// }       //tek sayıları yazdırdık

 


const array = [];

for (let sayi = 2; sayi <= 100; sayi++) {
    var kontrol = 0;

    for (i = 1; i <= sayi; i++) {
        if (sayi % i == 0) {
            kontrol++;
        }
    }

    if (kontrol == 2) {
        array.push(sayi);
    }

}

console.log(array);

// asal sayıları yazdırdık