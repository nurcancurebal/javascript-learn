/* -> İşlenmeyen reddetmeler
Bir hata işlenmediğinde ne olur?
Burada olduğu gibi zincirin sonuna bir hata işleyici eklemeyi unutabiliriz: */

new Promise(function () {

    noSuchFunction(); // Burada hata (böyle bir fonksiyon yok)
})
    .then(() => {
        // başarılı söz işleyicileri, bir veya daha fazla
    }); // sonunda .catch olmadan!

/* Bir hata durumunda, söz verme durumu "reddedilir" ve yürütme en yakın reddetme işleyicisine atlamalıdır. Ancak yukarıdaki örneklerde böyle bir işleyici yoktur. Böylece hata "sıkışmış" olur. Onu halledecek bir kod yok.

Pratikte, tıpkı normal işlenmemiş hatalarda olduğu gibi, bir şeylerin çok yanlış gittiği anlamına gelir.

Normal bir hata oluştuğunda ve yakalanmadığında ne olur try..catch? Senaryo ölür. Benzer bir şey, işlenmeyen söz retlerinde de olur.

JavaScript motoru bu tür reddetmeleri izler ve bu durumda genel bir hata oluşturur. Yukarıdaki örneği çalıştırırsanız konsolda görebilirsiniz.

Tarayıcıda, olayı kullanarak bu tür hataları yakalayabiliriz unhandledrejection:*/

window.addEventListener('unhandledrejection', function (event) { // Reddetme işleyicisi olmayan bir JavaScript reddedildiğinde unhandledrejection olay, komut dosyasının genel kapsamına gönderilir

    // olay nesnesinin iki özel özelliği vardır:
    console.log(event.promise); // [object Promise] - hatayı oluşturan söz

    console.log(event.reason); // Error: Whoops! - işlenmeyen error nesnesi
});

new Promise(function () {

    throw new Error("Whoops!");
}); // hatayı işlemek için yakalama yok

/* Olay, HTML standardının bir parçasıdır .

Bir hata oluşursa ve yok .catch ise, unhandledrejection işleyici tetiklenir ve event hatayla ilgili bilgi içeren nesneyi alır, böylece bir şeyler yapabiliriz.

Genellikle bu tür hatalar kurtarılamaz, bu nedenle en iyi çıkış yolumuz kullanıcıyı sorun hakkında bilgilendirmek ve muhtemelen olayı sunucuya bildirmektir.

Node.js gibi tarayıcı olmayan ortamlarda, işlenmeyen hataları izlemenin başka benzer yolları vardır. */