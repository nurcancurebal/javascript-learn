/* Kaç gün önce?

kacGunOnce(tarih,gün) adında bir fonksiyon ile verilen tarih'ten gün kadar öncesini bulunuz.

Örneğin, eğer bugün 20’si ise, kacGunOnce(new Date(),1) size 19 döndürmeli. Yine kacGunOnce(new Date(),2) size 18 döndermeli.

Ayrıca aylar/yıllar boyunca güvenilir bir şekilde çalışmalıdır:

let tarih = new Date(2015, 0, 2);

console.log( kacGunOnce(tarih, 1) ); // 1, (1 Ocak 2015)
console.log( kacGunOnce(tarih, 2) ); // 31, (31 Aralık 2014)
console.log( kacGunOnce(tarih, 365) ); // 2, (2 Ocak 2014)

Not: Fonksiyon verilen tarih üzerinde oynama yapmamalıdır.*/

// Yapacağımız işlem: verilen tarih'ten istenen gün kadar çıkarmaktır:

function kacGunOnce(tarih, gun) {

    tarih.setDate(tarih.getDate() - gun); // 

    return tarih.getDate();
}

/* … Fakat fonksiyon tarih'i değiştirmemelidir. Bu önemlidir çünkü dışarıdaki kod gönderilen tarihin aynı kaldığını varsaymaktadır.

Bunu uygulayabilmek için tarih objesinin klonunu almak mümkündür: */

function kacGunOnce(tarih, gun) {

    let tarihKopyasi = new Date(tarih);

    tarihKopyasi.setDate(tarih.getDate() - gun);
    // getDate ile tarihin gününü getiriyor gun den çıkartıyor set date ile tarihinKopyasının içindeki günü ayarlıyor

    return tarihKopyasi.getDate();
}

let tarih = new Date(2015, 0, 2);

console.log(kacGunOnce(tarih, 1)); // 1, (1 Ocak 2015)
console.log(kacGunOnce(tarih, 2)); // 31, (31 Aralık 2014)
console.log(kacGunOnce(tarih, 365)); // 2, (2 Ocak 2014)