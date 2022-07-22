// Arrayleri varsayılan olarak virgülle birleştirip string olarak yazdırır


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

let newNames = names.join();

console.log(typeof names, typeof newNames); // object string


console.log(names.join()); // Asabeneh,Mathias,Elias,Brook

console.log(names.join('')); //AsabenehMathiasEliasBrook

console.log(names.join(' ')); //Asabeneh Mathias Elias Brook

console.log(names.join(', ')); //Asabeneh, Mathias, Elias, Brook

console.log(names.join(' # ')); //Asabeneh # Mathias # Elias # Brook

const number = [151, 616, 397542, 738, 62];

console.log(number.join()); //151,616,397542,738,62

let newNumber = number.join();

console.log(typeof number, typeof newNumber); // object string