const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 27]
ages.sort()
let endAges= ages.length-1
let sonuc= ages[endAges]-ages[0]

console.log(`${ages} min:${ages[0]} max: ${ages[endAges]}  max-min= ${sonuc}`)

let end= ages.length

let son= end%2==0
let ortanca= end/2
Math.ceil(ortanca)

console.log(son ? (ages[4]+ages[5])/2 : ages[ortanca])


//!1. ortanca sayıyı nasıl buluruz?

//! 2. arreyin içini toplat ve end değişkenine böl ortalama yaşı bul

//! 1. sorunun 5.şıkkını yap

