function sor(soru, evet, hayir) {

    if (soru === true) {

        return evet();

    } else {

        return hayir();
    }
}

function tamamGoster() {

    return "Kabul ettiniz";
}

function iptalGoster() {

    return "Çalışmasını durdurdunuz";
}

// kullanım: tamamGoster, iptalGoster fonksiyona parametre olarak gönderilmiştir.
console.log(sor(true, tamamGoster, iptalGoster));   // Kabul ettiniz

// sor fonksiyonunun argümanları callbacks veya geri çağrım fonksiyonları olarak adlandırılırlar.
// Fikir fonksiyonu bizim baştan paslayıp ana fonksiyon içerisinde daha sonra duruma göre çağırılmasından kaynaklanmaktadır.
// Örneğe bakarsanız tamamGoster “evet” cevabı için geri çağrım fonksiyonu’dur.


// Fonksiyon İfadesi kullanarak aynı fonksiyonu daha kısa bir şekilde yazmak mümkün:

function sorTwo(soru, evet, hayir) {

    if (soru === true) {

        return evet();

    } else {

        return hayir();
    }
}

console.log(sorTwo(
    false,
    function () { return ("Kabul ettin"); },
    function () { return ("Çalışmayı durdurdun."); }
)); // Çalışmayı durdurdun.