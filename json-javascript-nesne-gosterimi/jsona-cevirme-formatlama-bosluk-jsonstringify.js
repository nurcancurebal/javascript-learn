/* Formatlama: bosluk
JSON.stringify(deger, degistirici, boşluk)'ın 3. argümanı formatlamayı güzel yapmak için kaç boşluk bırakılması gerektiği bilgisini alır.

Önceden, karakter dizisi haline getirilmiş objelerin hiç boşlukları bulunmamaktaydı. Eğer bunu obje üzerinden göndermek istiyorsanız pek önemli değildir. bosluk sadece güzel çıktı vermek amacıyla kullanılır.

Burada bosluk = 2 kullanılmıştır, iç içe objelerin bir kaç satırda ve objeler arasında 2 boşluk olacak şekilde ayarlamasını söyler. */

let kullanici = {
  adi: "Nurcan",
  yas: 25,
  roller: {
    admin: false,
    editor: true
  }
};

console.log(JSON.stringify(kullanici, null, 2));
/* iki boşluk:
{
  "adi": "Nurcan",
  "yasi": 25,
  "roller": {
    "admin": false,
    "editor": true
  }
}
*/

/*  JSON.stringify(user, null, 4) için ise çıktı aşağıdaki gibi olur:
{
    "adi": "Nurcan",
    "yasi": 25,
    "roller": {
        "admin": false,
        "editor": true
    }
}
*/
// bosluk genelde loglama veya güzel çıktı almak için kullanılır.