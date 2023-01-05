/* Her saniyenin çıktısını yazdırın.

printNumbers(from, to) adında bir fonksiyon yazın ve bu fonksiyon baslangic'tan bitis'e kadar her saniye bir sayı yazdırsın.

Bunun iki versiyonunu da yazınız.

setInterval kullanarak.
Kendini tekrar eden setTimeout kullanarak. */

// setInterval:

function printNumbers1(from, to) {

    let current = from; // from number ilkel bir tip olduğu için kopyalayarak işlem yaptık from değişmedi yalnızca current değişti(refaranssız kopyalama işlemi gerçekleşiyor)

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

        current++; // currenti arttırıp 5 sn bekliyor

    }, 5000); // buradaki 5 sn ertelemesi 1 defa çalışıyor
}

printNumbers2(5, 10);

/* İki çözümde de ilk çıktı için bir gecikme söz konusudur. Bazen bir satır ekleyerek ilk çıktının hemen verilmesini sağlayabilirsiniz.

Ayrıca fonksiyonun hemen çalışmasını istiyorsak, aşağıdaki gibi ayrı bir hatta ek bir çağrı ekleyebiliriz: */

// ilk değişken için 5 sn beklemeden çalıştırmak için:

function printNumbers3(from, to) {

    let current = from;

    function go() {

        console.log(current);

        if (current == to) {

            clearInterval(timerId);
        }

        current++;
    }

    go(); // fonksiyonu 1 defa çalıştırıyor burada  ondan sonra aşağıdaki timerId ye bakıyor

    let timerId = setInterval(go, 5000);
}

printNumbers3(5, 10);