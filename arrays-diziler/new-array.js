/* new Array()
Dizi yaratmanın bir diğer yolu ise aşağıdaki gibidir:

let arr = new Array("Elma", "Armut", "vs");
Bu şekilde yazım daha nadir kullanılır, [] kullanımı daha kısadır. Farklı bir özelliği daha vardır:

Eğer new Array sayı argümanı ile çağırılırsa, yeni bir boş dizi yaratır. İçerisine bir şey koymaz ve dizinin boyutunu belirtilen değer kadar tanımlar.

Bu özellik yanlış kullanıma müsaittir: */

let arr = new Array(2); //  [2] diye bir dizi mi oluşturacak ?

console.log(arr[0]); // undefined! böyle bir eleman yok

console.log(arr.length); // length 2

/* Yukarıda new Array(sayı)'nın tüm elemanları undefined döndürür.

Böyle sürprizler ile karşılaşmamak için genelde [] kullanılır. */