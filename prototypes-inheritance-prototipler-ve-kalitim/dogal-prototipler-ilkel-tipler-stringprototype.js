/* -> İlkel tipler
En karışık yapılar karakter dizileri, sayılar ve boolean ile yapılır.

Hatırlayacağınız üzere bunlar obje değildirler. Fakat özelliklerine erişmeye çalıştığınızda, gömülü yapıcı obje ile geçici objeler üretilir. Bunlar String, Number, Boolean metodlarını sağlar ve yok olurlar.

Bu objeler gizli üretilir ve çoğu motor bunları optimize edebilir, Fakat şartname bunu tam olarak bu şekilde tanımlar. Bu objelerin metodları da prototype’ta yer alır, String.prototype, Number.prototype ve Boolean.prototype olarak bulunur. */


/* -> "null
-> Doğal prototiplerin değiştirilmesi
Doğal(native) prototipler modifiye edilebilir. Örneğin, String.prototype'a bir metod eklersek, bu tüm karakter dizileri için geçerli olur: */

String.prototype.show = function () {

    console.log(this); // [String: 'BOOM!']
};

"BOOM!".show();

/* Geliştirme sürecinde hangi fikirlerin gömülü olması gerektiğine dair fikrimiz olabilir. Hatta doğal prototiplere ekleme yapmak için istek duyabilirsiniz. Fakat bu genelde kötü bir fikiridir.

Prototipler evrenseldir, bundan dolayı kolayca ikilik çıkarabilir. Eğer iki kütüphane String.prototype.show şeklinde metod eklerse bunlardan biri diğerinin üzerine yazar.

Modern programlama da sadece bir koşulda doğal prototiplerin düzenlenmesine izin verilir. Buna pollyfills denir. Diğer bir deyişle eğer JavaScript şartnamesinde bir metod var fakat bu JavaScript motoru tarafından henüz desteklenmiyorsa, bunu elle yazmak ve gömülü prototipe eklemek mümkündür. */

if (!String.prototype.repeat) { // Eğer böyle bir metod yoksa
    // prototip'e ekle

    String.prototype.repeat = function (n) {
        // karakteri n defa tekrarlar

        // aslında kod bundan daha karmaşık olmalıdır.
        // eğer n negatif bir sayı gelirse hata dönder
        // Algoritma şartnamede belirlenmiştir.
        return new Array(n + 1).join(this);
    };
}

console.log("La".repeat(3)); // LaLaLa