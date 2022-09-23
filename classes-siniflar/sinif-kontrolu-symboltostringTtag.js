/* -> Symbol.toStringTag
Objenin toString metodu özel bir özellikle Symbol.toStringTag düzenlenebilir. */

let user = {
    [Symbol.toStringTag]: 'User'
};

console.log({}.toString.call(user)); // [object User]

// Çoğu çevre-özel objelerde böyle özellikler bulunur. Aşağıda tarayıcı tabanlılar yer almaktadır:

// Çevre-özel objeler ve sınıflar için toStringTag
console.log(window[Symbol.toStringTag]); // window
console.log(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

console.log({}.toString.call(window)); // [object Window]
console.log({}.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest]

/* Gördüğünüz gibi, sonuç kesinlikle Symbol.toStringTag'dır ve varsa [object ...] içerisinde saklanır.

Sonunda daha güçlü bir typeof’a sahip olduk. Artık sadece ilkel datalar için değil, gömülü gelen objeler için bile çalışabilir durumdadır.

Gömülü gelen objeler için tipi karakter dizi olarak almak istediğimizde instanceof yerine bunu kullanabiliriz. Instanceof sadece kontrol işlemi yapmaktaydı. */