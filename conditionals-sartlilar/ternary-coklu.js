// Birden fazla "?" işareti kullanarak birden fazla koşula göre değer döndürme işlemini sağlayabilirsiniz.

let yas = 18;

let mesaj = (yas < 3) ? 'Ne tatlı şeysin sen öyle!' :
    (yas < 18) ? 'Merhaba!' :
        (yas < 100) ? 'Merhaba efendim!' :
            'Ne garip bir yaşın var!';

console.log(mesaj);

/* İlk başta neyin ne olduğunu anlamak zaman alabilir.Fakat daha yakından bakınca sıra ile değerin kontrol edildiğini
görebilirsiniz.
İlk soru işareti yas < 3 kontrolünü yapar.
Eğer doğru ise Ne tatlı şeysin sen öyle! döndürür.Diğer türlü sonraki ":"e gider ve yas < 18 kontrolünü yapar.
Eğer doğru ise Merhaba döndürür.Diğer türlü sonraki ":"e gider ve yas < 100 kontrolünü yapar.
Eğer doğru ise Merhaba efendim döndürür.Diğer türlü sonraki ":"e gider ve 'Ne garip bir yaş' döner. */

// '?' işaretinin ideal kullanımı sadece o ya da bu sorusudur. Daha uzun bir cümle için if kullanmalısınız.