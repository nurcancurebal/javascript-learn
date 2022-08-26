/* İlk karakteri büyük harf yapma
ucFirst(str) adında bir fonksiyon yazın bu fonksiyon verilen str değişkeninin ilk karakterini büyük harf yapıp dönsün,

ilk karakter boşsa kontrol edilsin

ucFirst("ahmet") == "Ahmet"; */


function ucFirst(str) {

    if (!str) {

        return str
    }

    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("nurcan"));
console.log(ucFirst(" nurcan"));