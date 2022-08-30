//Slice() yöntemi, bir dizinin bir bölümünün sığ bir kopyasını, baştan sona seçilen (bitiş dahil değildir) yeni
//bir dizi nesnesine döndürür; burada başlangıç ​​ve bitiş, o dizideki öğelerin dizinini temsil eder.Orijinal dizi değişmez.

// slice() fonksiyonunu kullanarak bir kopyasını yaratabilir ve sonrasında bunu sıralayabilirsiniz:

function copySorted(arr) {

    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log(arr); // [ 'HTML', 'JavaScript', 'CSS' ]