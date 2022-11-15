/* iç içe tahribat
Bir nesne veya dizi başka nesneler ve diziler içeriyorsa, daha derin kısımları çıkarmak için daha karmaşık sol taraf kalıplarını kullanabiliriz.

Aşağıdaki kodda options, özellikte başka bir nesne ve özellikte size bir dizi vardır items. Atamanın sol tarafındaki desen aynı yapıya sahiptir: */

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true    // yok etmeyeceğimiz ekstra bir şey,
};

// netlik için birden fazla satıra bölünmüş yıkım ataması
let {
    size: { // put size here
        width,
        height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // nesnede mevcut değil (varsayılan değer kullanılır)
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

console.log(options); //! title yok, çünkü ekleme işlemi yapmadık sadece options' u çıkart demiş olduk
// {
//     size: { width: 100, height: 200 },
//     items: [ 'Cake', 'Donut' ],
//     extra: true
//   }

/* Bahsedilmeyen dışındaki tüm options nesne extra, karşılık gelen değişkenlere atanır.

Unutmayın ki size ve items kendisi tahrip edilmemiştir.


width Son olarak, , height, item1, item2 ve title from varsayılan değere sahibiz .

Birçok özelliğe sahip karmaşık bir nesnemiz varsa, yalnızca ihtiyacımız olanı çıkarabiliriz: */

// boyutu bir bütün olarak bir değişkene alın, gerisini görmezden gelin
let { size } = options;

console.log(size); // { width: 100, height: 200 }