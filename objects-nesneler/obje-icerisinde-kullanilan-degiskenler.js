// JavaScript dili için ayrılmış kelimeler obje içerisinde kullanılabilir.
// Değişken ismi for,let,return gibi dil için ayrılmış kelimelerden oluşamaz.
// Fakat obje özellikleri için böyle bir sınırlama yoktur. Değişken her türlü adlandırılabilir.

let obj = {
    for: 1,
    let: 2,
    return: 3
}

console.log(obj.for + obj.let + obj.return);  // 6

// Temelde tüm isimlere izin verilir, fakat bir tane özel isim vardır "__proto__" bu özel bir davranış sergiler. Örneğin
// obje olmayan değeri atayamazsınız:

let objTwo = {};

objTwo.__proto__ = 5;

console.log(objTwo.__proto__); // [Object: null prototype] {}, beklendiği gibi çalışmadı.

/*
Kodda görüldüğü üzere, 5, ilkel bir tip olduğundan dolayı atanamadı ve görmezden gelindi.
Bundan dolayı eğer kullanıcıya bir anahtar tanımlattırılırsa bu aslında hatalara ve güvenlik açıklarına neden olabilir.
Böyle bir durumda kullanıcı “proto” seçerse tüm mantık yukarıdaki gibi çalışmaz hale gelir.
__proto__'yu normal özellik olarak tanıtma yöntemi de bulunmaktadır, bunu ilerleyen zamanlarda işlenecektir.
Map adında farklı bir veri yapısı daha vardır ve her türlü anahtarı kabul eder. */