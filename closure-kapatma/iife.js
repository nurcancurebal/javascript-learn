/* -> IIFE
Eski kodları arasanız “anında çalışan fonksiyon ifadeleri” ( IIFE ) bu amaçla kullanılmıştır.

Aşağıdaki gibidirler: */

(function () {

    let mesaj = "Merhaba";

    console.log(mesaj); // Merhaba

})();

/* Burada bir fonksiyon ifadesi yaratıldı ve doğrudan çağırıldı. Kod hemen çalışır ve kendine ait değişkenlere sahiptir.

Fonksiyon ifadesi parantez içine alınmıştır (function {...}), çünkü eğer JavaScript ana kod akışında "function" görürse bunu Fonksiyon Tanımı olarak algılar. Fakat Fonksiyon Tanımının ismi olmalıdır ve ismi olmadığından dolayı bu kod parantez içine alınmaz ise hata verir. */

// Error: Unexpected token (
/* function() { // <-- JavaScript fonksiyon ismini bulamadı. ('i gördü ve hemen hata verdi.

    let mesaj = "Merhaba";

    console.log(mesaj); // Merhaba

} (); */

/* “Tamam, önemli değil, hadi Fonksiyon tanımı yapmak için bir ad verelim” derseniz bu da çalışmaz. Çünkü JavaScript Fonksiyon Tanımlarının anında çalışmasına izin vermez: */

// Bu defa aşağıdaki parantez hata verecektir.

/* function go() {

} (); */ // <-- Fonskyion Tanımı anında çalıştırılamaz.

/* …Bundan dolayı parantez bu fonksiyonun başka bir ifade kaynağında yaratıldığını ifade eder ve bu da Fonksiyon İfadesidir. İsme gerek duymaksızın doğrudan çalıştırılır.

JavaScript’e başka yollarla da Fonksiyon İfadesini belirtmek mümkündür. */

//  IIFE yaratmanın yolları.

(function () {

    console.log("Fonksiyon etrafındaki parantezler"); // Fonksiyon etrafındaki parantezler
})();

(function () {

    console.log("Her şeyin etrafında parantez"); // Her şeyin etrafında parantez
}());

!function () {

    console.log("Lojik NOT kapısıyla ifadenin başlaması."); // Lojik NOT kapısıyla ifadenin başlaması.
}();

+function () {

    console.log("Matematiksel toplama işareti ile ifadenin başlaması."); // Matematiksel toplama işareti ile ifadenin başlaması.
}();

// Yukarıdaki tüm durumlarda Fonksiyon İfadesi tanımlanır ve doğrudan çalıştırılır.