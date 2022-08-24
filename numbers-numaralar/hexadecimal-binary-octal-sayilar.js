/* HexaDecimal, binary ve octal sayılar.
Hexadecimal sayılar JavaScript’te çoğunlukla renklerde, karakter çevrimlerinde ve birçok alanda kullanılmaktadır. Bundan
dolayı 0x gibi kolay yazım biçimine sahiptir. Diğer türlü sayı kullanılması gerekmektedir. */

console.log(0xff); // 255
console.log(0xFF); // 255, (büyük küçük harf farkı yoktur)

// Binary ve Octal sayı sistemleri ise çok nadir kullanılmaktadır fakat 0b veya 0o önekleri mevcuttur.

let a = 0b11111111; // binary 255
let b = 0o377; // octal 255

console.log(a == b); // true, iki sayı da aynıdır.

// 3 çeşit sayısal sistem desteklenmiştir. Diğer sayısal sistemler için ise parseInt kullanılmalıdır.


/*
Decimal :     0   1   2   3   4   5   6   7   8   9   10   11   12   13   14   15

HexaDecimal : 0   1   2   3   4   5   6   7   8   9   A    B    C    D    E    F

Octal :       0   1   2   3   4   5   6   7  10  11   12   13   14   15   16   17 */