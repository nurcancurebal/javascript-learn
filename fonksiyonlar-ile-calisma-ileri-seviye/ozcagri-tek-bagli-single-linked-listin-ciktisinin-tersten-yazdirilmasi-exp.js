/* Tek-bağlı(single-linked) List'in çıktısının tersten yazdırılması

Bir önceki görevde Tek-bağlı(single-linked) List'in çıktısı yazdırılan listenin tersten çıktısını yazdırınız:

Özçağrı kullanarak
Özçağrı çözümü burada biraz çetrefilli.

Önce listenin geri kalanını yazdırmak sonra ise o anki değerini yazdırmak gerekmektedir. */

let list = {
    deger: 1,
    sonraki: {
        deger: 2,
        sonraki: {
            deger: 3,
            sonraki: {
                deger: 4,
                sonraki: null
            }
        }
    }
};

function geriListeYazdır(list) {

    if (list.sonraki) {

        geriListeYazdır(list.sonraki);
    }

    console.log(list.deger); // 4, 3, 2, 1
}

geriListeYazdır(list);

/* Döngü versiyonu
Döngü versiyonu da bir öncekine göre biraz daha karmaşıktır.

list'teki son değerin alınması gibi bir yol yoktur. Ayrıca “geri doğru” gidilemez.

Bundan dolayı elemanlar sıra ile bir diziye yazılıp sonra bu dizi sondan başa okunarak bu problem çözülebilir. */

let list2 = {
    deger: 1,
    sonraki: {
        deger: 2,
        sonraki: {
            deger: 3,
            sonraki: {
                deger: 4,
                sonraki: null
            }
        }
    }
};

function geriListeYazdır(list) {

    let dizi = [];
    let tmp = list;

    while (tmp) {

        dizi.push(tmp.deger);
        tmp = tmp.sonraki;
    }

    for (let i = dizi.length - 1; i >= 0; i--) {

        console.log(dizi[i]); // 4, 3, 2, 1
    }
}

geriListeYazdır(list2);
// TODO oku