/* Her saniyenin çıktısını yazdırın.

printNumbers(from, to) adında bir fonksiyon yazın ve bu fonksiyon baslangic'tan bitis'e kadar her saniye bir sayı yazdırsın.

Bunun iki versiyonunu da yazınız.

setInterval kullanarak.
Kendini tekrar eden setTimeout kullanarak. */

// setInterval:

function printNumbers1(from, to) {

    let current = from;

    let timerId = setInterval(function () {

        console.log(current);

        if (current == to) {

            clearInterval(timerId);
        }

        current++;

    }, 5000); // bütün fonksiyonu okuyor 5 sn bekliyor sonra içine girip çalıştırıyor, her bir sayıyı yazmadan önce 5 sn bekliyor
}

printNumbers1(5, 10);

// setTimeout kullanilarak:

function printNumbers2(from, to) {

    let current = from;

    setTimeout(function go() {

        console.log(current);

        if (current < to) {

            setTimeout(go, 5000);
        }

        current++; // TODO her seferinde burayı arttırdıktan sonra aşağıdaki 5 i okuyor mu?

    }, 5000); // TODO buradaki 5 sn ertelemesi 1 defa mı çalışıyor
}

printNumbers2(5, 10);

/* İki çözümde de ilk çıktı için bir gecikme söz konusudur. Bazen bir satır ekleyerek ilk çıktının hemen verilmesini sağlayabilirsiniz.

Ayrıca fonksiyonun hemen çalışmasını istiyorsak, aşağıdaki gibi ayrı bir hatta ek bir çağrı ekleyebiliriz: */

function printNumbers3(from, to) {

    let current = from;

    function go() {

        console.log(current);

        if (current == to) {

            clearInterval(timerId);
        }

        current++;
    }

    go();

    let timerId = setInterval(go, 5000);
}

printNumbers3(5, 10);