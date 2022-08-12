// Confirm() yöntemi, bir Tamam ve İptal düğmesi ile birlikte belirli bir mesaj içeren bir iletişim kutusu görüntüler. Bir
// onay kutusu genellikle bir kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır. Pencere onay() argüman
// olarak bir dize alır. Tamam'a tıklamak doğru değeri verir, İptal düğmesine tıklamak ise yanlış değeri verir.


const agree = confirm('Are you sure you like to delete? ');

console.log(agree);     // iletişim kutusunda neye tıkladığınıza bağlı olarak sonuç doğru veya yanlış olacaktır

// Tüm bu fonksiyonlar(alert,confirm, prompt) modal dır. Tekrar hatırlatmak gerekirse modallar kullanıcının etkileşimi
// olana kadar kodu durdururlar. Yani kullanıcıdan cevabı beklerler.