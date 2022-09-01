/* Azami Maaş(En yüksek Maaş)

Maaşların olduğu obje:

let maaslar = {
  "Erdinç": 100,
  "Bal": 300,
  "Nurcan": 250
};

azamiMaas(maaslar) fonksiyonu gönderilen maaşların içerisinden kimin en yüksek maaşı aldığını döndürsün.

Eğer maaslar boş ise null döndürmelidir.
Eğer bir kaç tane en yüksek maaşlı kişi var ise bu durumda onları dizi şeklinde döndürsün.
Not: Object.entries kullanabilirsiniz.

çözüm */

let maaslar = {
    "Erdinç": 100,
    "Bal": 300,
    "Nurcan": 250
};

function azamiMaas(maaslar) {

    let max = 0;
    let maxName = null;

    for (let [isim, maas] of Object.entries(maaslar)) {

        if (max < maas) { // max küçük olduğu sürece maas max' ın içine atılıyor; max maastan büyük olunca duracak

            max = maas;
            maxName = isim;
        }
    }

    return maxName;
}

console.log(azamiMaas(maaslar)); // Bal