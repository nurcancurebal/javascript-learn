const numb = [1, 2, 3, 4, 5, 6];

numb.reverse();

console.log(numb); // (6) [6, 5, 4, 3, 2, 1]



const name = 'nurcan';

let newName = name.split('').reverse().join('');
// önce virgüller ayırarak arraya çevirdi, sonra tersten yazdı,sonra birleştirdi string çevirdi

console.log(newName);   // nacrun

console.log(typeof newName);    // string