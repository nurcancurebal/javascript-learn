let varFirst = "14.15";
let varSecond = "14.15465";
let varThirsth = 14.45;
let varFourth = 14;
let varFifth = "14.45465";

console.log("TEST ONE", varFirst == varSecond) // false

console.log("TEST TWO", parseInt(varFirst) === parseInt(varSecond),parseInt(varFirst), parseInt(varSecond) ) // true 14 14

console.log("TEST THREE", parseFloat(varFirst) === parseFloat(varSecond), parseFloat(varFirst), parseFloat(varSecond),typeof parseFloat(varFirst),typeof parseFloat(varSecond) ) // false 14.15 14.15465 number number


varFifth = Number(parseFloat(varFifth).toFixed(2))


console.log("TEST FOUR", parseFloat(varThirsth) === parseFloat(varFifth), parseFloat(varThirsth), parseFloat(varFifth),typeof parseFloat(varThirsth),typeof parseFloat(varFifth) ) // true 14.45 14.45 number number


let deneme = {asdsa: "asdsa"};
let denememe = {asdas:"adas"};

console.log(deneme==denememe , deneme, denememe, typeof deneme, typeof denememe)
// false {asdsa: 'asdsa'} {asdas: 'adas'} object object


console.log({} == {})  // false