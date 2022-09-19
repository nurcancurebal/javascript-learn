/* -> Object.getOwnPropertyDescriptors
Tüm özelliklerin tanımlarını bir defada almak için Object.getOwnPropertyDescriptors(obj) metodunu kullanabilirsiniz.

Object.defineProperties ile birlikte “bayrak-farkında” olacak şekilde objenin klonlanması için kullanılabilir: */

let obj = {
    name: 'Nurcan',
    surname: 'Cürebal'
};

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

console.log(clone); // { name: 'Nurcan', surname: 'Cürebal' }

// Normalde obje klonlandığında, atama ile özellikler aşağıdaki gibi kopyalanmalıdır:

for (let key in user) {

    clone[key] = user[key]
}

/* …Fakat bu bayrakları kopyalamaz. Eğer “daha iyi” bir klon istenirse Object.defineProperties tercih edilmelidir.

Diğer bir fark ise for..in sembolik özellikleri görmezden gelir. Fakat Object.getOwnPropertyDescriptors tüm özellikleri, sembolik olanlar dahil, dönderir. */