/* -> length bir özelliktir
Genelde başka diller ile çalışmış programcılar yanlışlıkla str.length yerine str.length() metodunu çağırmaktadırlar. Böyle
bir metod yoktur.

str.length sayısal bir değerdir, fonksiyon değildir! Sonunda parantez açıp kapanmaz. */

//length= kaç karakter uzunluğunda olduğunu söylüyor

let js = 'javascript';

console.log(js.length); // 10


console.log(`Naber\n`.length); // 6

// Dikkat ederseniz \n “özel karakter” oludğundan dolayı bir karakter olarak tanımlandı.