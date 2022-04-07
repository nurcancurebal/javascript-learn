const birinciSayi = 46;
const ikinciSayi = 50;
const toplaBir = birinciSayi + ikinciSayi;

const toplaIki = sayilariTopla(birinciSayi, ikinciSayi);
const toplaUc = sayilariTopla(10, 15);


function sayilariTopla(birinciDeger, ikinciDeger) {

    const toplam = birinciDeger + ikinciDeger;
    return toplam;
};
/* toplama işlemini bir değişkene atadık her seferinde bu değişkeni kullanarak farklı sayılar yazarak istediğimiz
kadar sayıyı kısa yoldan her seferinde toplama işlemini baştan yaptırmayarak istediğimiz kadar sayı toplatabiliriz  */