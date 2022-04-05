const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];

const newFullStack = Array().concat(fullStack[0], fullStack[1]); // buradaki Array() boş bir arrayi ifade ediyor concat
// arrayleri birleştirip boş olan arrayin içine atıyor onuda newfullstack değişkenine atıyoruz


console.log(newFullStack.join(" ")) // join ile arrayi string olarak birleştirir