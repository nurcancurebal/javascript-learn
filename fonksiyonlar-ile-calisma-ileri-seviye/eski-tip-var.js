/* Eski tip "var"
İlk bölümde degiskenler altında üç çeşit değişken tanımlama yöntemi olduğundan bahsedilmişti.

1. let
2. const
3. var

let ve const Sözcüksel Ortam anlamında birbiri ile tam olarak aynıdır.

Fakat var bunlardan çok farklıdır. Bunun dilin ilk oluşmaya başladığı zamanlara dayanır. Genelde modern stilde pek kullanılmazlar fakat yine de arada sırada görebilirsiniz.

İlk görüşte var let ile benzer şekilde çalışıyormuş gibi görünür. İkisi de değişken tanımlamaya yarar: */

function selamVer1() {

    var terim1 = "Merhaba"; // yerel değişken "let" yerine "var" kullanılmıştır.

    console.log(terim1); // Merhaba
}

selamVer1();

//*console.log(terim1); // Hata! terim tanımlı değil.

// …Fakat farklılık tam da burada ortaya çıkar.


/* -> “var”'ın blok kapsamı yoktur
var ya fonksiyon içinde yada globalde tanımlanır, diğer türlü tüm bloklar içerisinden erişilebilir.

Örneğin: */

if (true) {

    var test = true; // "let" yerine "var" kullanıldı
}

console.log(test); // true, değişken if'ten sonra da varlığına devam etti.

/* Eğer 2. satırda let test kullanılsaydı console.log içerisinde görünür olmazdır. Fakat var kod bloğunu görmezden gelir. Bundan dolayı global bir test değişkeni olmuş olur.

Aynı şekilde döngüler için de var döngünün dışında da erişilebilirdir: */

for (var i = 0; i < 10; i++) {
    // ...
}

console.log(i); // 10,"i" döngüden sonra görülebilirdir, evrensel değişken olarak çalışır.

// Eğer fonksiyonun içinde bir if bloğu varsa bu durumda var fonksiyon seviyesinde bir değişken olur:


/* Eğer if, for'a rağmen çalışan var değişkenleri görürseniz bunun nedeni önceden JavaScript’te blokların Sözcüksel Ortama dahil olmamasındandır. */


/* -> “var” fonksiyon çalışmaya başladığında işlenir.
var tanımları fonksiyon ( veya script ) çalıştığında tanımlanır.

Diğer bir deyişle var değişkenleri fonksiyon başlangıcında tanımlanır, tanımın nerede olduğu önemli değil. ( iç içe fonksiyonları hariç tabi )

Aşağıdaki koda bakarsanız: */

function selamVer3() {

    terim3 = "Merhaba";

    console.log(terim3);

    var terim3;
}

// …Teknik olarak aşağıdaki gibidir.

function selamVer4() {

    var terim4;

    terim4 = "Merhaba";

    console.log(terim4);
}

// …Hatta şu şekilde de olabilir:

function selamVer5() {

    terim5 = "Merhaba"; // (*)

    if (false) {

        var terim5;
    }

    console.log(terim5);
}

/* Bu davranışa “yükseltilme” davranışı da denir, çünkü tüm var ile tanımlamalar fonksiyonun başına “yükseltilme”

Bundan dolayı yukarıdaki örnekte if(false) hiçbir zaman çalışmayacaktır, zaten önemli de değildir. İçinde bulunan var fonksiyonun başında işlenir. Yani (*) anında zaten terim5 değişkeni vardır.

~ Tanımlar yükseltilir fakat atamalar yükseltilmez

Bir örnekle göstermek gerekirse: */

function selamVer6() {

    console.log(terim6); // undefined

    var terim6 = "Merhaba";
}

selamVer6();

// var terim6 = "Merhaba" iki tane aksiyon barındırır:

/* 1. Değişken tanımlama var
2. Değişken atama =.

Tanımlama “yükseltilme” işlemi ile fonksiyon başlangıcında yapılır. Fakat atama kod neredeyse orada yapılır. Bundan dolayı kod aslında tam olarak aşağıdaki gibi çalışır: */

function selamVer7() {

    var terim7; // tanımalma başlangıçta çalışır.

    console.log(terim7); // undefined, tanımsız

    terim7 = "Merhaba"; // ...atama burada yapılır.
}

selamVer7();

/* Tüm var tanımları fonksiyon başladığında işlendiğinden dolayı, istenildiği yerlere bu değişkenlere erişim bulunmaktadır. Fakat değişkenler atama yapılana kadar tanımsızdır ( undefined ).

Yukarıdaki her iki console.log örneği de hatasız çalışmaktadır çünkü terim mevcuttur. Değeri atanmadığından undefined göstermiştir. */