/* 1.primitive data types
string, number, boolean(true or false), undefined (tanımsız), null (boş değer)

2 . non primitive data types 
objects, functions, arrays(diziler) */

// nan = bu matematiksel işlem hatalı

let numb = ['nurcan', 27, false]
console.log(numb)  
// bu bir array örneğidir,
// non primitive değişkenlerin değerlerini sonradan değiştirebiliyorken primitive değişkenler değişmez

let obj = {
    adi: 'nurcan',
    soyadi: 'cürebal',
    yaşı: 27
}
console.log(obj)

// bu bir obje örneği


let name = 'nurcan'
let surname = 'cürebal'
let fullname = name + ' ' + surname
console.log(fullname)

let nurcanyas = 27
let erdincyas = 26
let fullName = nurcanyas + erdincyas
console.log(fullName)           //+ = iki sayı olduğu zaman toplama islemi yapar,string değer olduğu zaman yan yana yazar


const paragraph= 'uzun paragraflarda ters slash \
koyarsak cümlenin sonuna bizi alt satırda yazdıracak \
yalnız ekran çıktısı cümlenin devamı şeklinde olacak \
burada olduğu gibi '
console.log(paragraph)