// varsayılan olarak virhgülle birleştirip string olarak yazdırır


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

console.log(names.join()); // Asabeneh,Mathias,Elias,Brook

console.log(names.join('')); //AsabenehMathiasEliasBrook

console.log(names.join(' ')); //Asabeneh Mathias Elias Brook

console.log(names.join(', ')); //Asabeneh, Mathias, Elias, Brook

console.log(names.join(' # ')); //Asabeneh # Mathias # Elias # Brook

const number = [151, 616, 397542, 738, 62];

console.log(number.join()); //151,616,397542,738,62
console.log(typeof number); // veri tipi object