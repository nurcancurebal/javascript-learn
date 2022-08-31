// Bir Map oluşturduğumuzda anahtar-değer çifti olarak dizi kullanabiliriz:

// [key, value] çiftlerinden oluşan dizi

let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

console.log(map); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }

/* Tıpkı bu formatta objeler için anahtar/değer çifti dizisi döndüren bir yerleşik fonksiyon Object.entries(obj) vardır.

Böylece bir objeden bir map oluşturabiliriz: */

let map2 = new Map(Object.entries({
    name: "John",
    age: 30
}));

console.log(map2); // Map(2) { 'name' => 'John', 'age' => 30 }

// Burada, Object.entries anahtar/değer çifti dizisi döndürür: [ ["name","John"], ["age", 30] ]. Mapin ihtiyacı olan da buydu.