//aradığınız kelimenin içerip/ içermediğine bakar

let string = '30 Days Of JavaScript';

console.log(string.includes('Days')); // true/ false döner aradığınız kelime varsa true yoksa false döner.
// büyük/ küçük harfe duyarlıdır



// str.includes un isteğe bağlı ikinci argümanı başlanacak pozisyonu belirtmenizi sağlar:

console.log("birader".includes("ir")); // true

console.log("birader".includes("ir", 3)); // false, 3. pozisyondan sonra `ir` bulunmamaktadır.