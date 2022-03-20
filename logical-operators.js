/* 
mantıksal operatörler
&& = ampersand (ve)
|| = pipe (ya da)
!  = negation (olumsuzlama) 
 */


let check = 4 > 3 && 10 > 5
console.log(check) // true
let checkk = 4 > 3 && 10 < 5
console.log(checkk) // false
let checkkk = 4 < 3 && 10 < 5
console.log(checkkk) // false,  true dönmesi için her iki tarafında her zaman  


let a = 4 > 3 || 10 > 5
console.log(a) // true
let aa = 4 > 3 || 10 < 5
console.log(aa) // true
let aaa = 4 < 3 || 10 < 5
console.log(aaa) //false , false dönmesi için ikisininde yanlış olması gerekir

let ismarried = !false
console.log(ismarried) //  aslında evli olmamasına rağmen true döndü


const birthDay = 17;

console.log(birthDay < 18 && "18 Yaşından küçük")


let nur= 5
let er = 10
let control= (nur>4 && nur< 10) && er>=10
console.log('36.satır',control)