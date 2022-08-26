/* Para işaretlerini metinden çıkarın
Formda "$120" ücret bulunmaktadır. Önce dolar işareti ardından sayı gelmektedir.

Öyle bir fonksiyon yazın ki extractCurrencyValue(str) bu fonksiyon sadece sayısal değeri döndersin. */


console.log(extractCurrencyValue('$120') === 120); // true

// Testler ile korunaklı olan aç.

function extractCurrencyValue(str) {

    return +str.slice(1); // başındaki +' yı number olsun diye koyduk bizden sıkı eşitlik istediği için string 120' miyi
    // numbera çevirdik
}