/* Bağık tarihin formatlanması

formatTarih(tarih) adında bir fonksiyon yazınız, bu tarih'i aşağıdaki gibi formatlamalıdır:

Eğer tarih 1 sn’den önce geçiyse "şimdi" yazmalıdır.
Eğer, eğer 1 dk önce geçtiyse "n. saniye önce" yazılmalıdır.
Eğer, bir saatten önce geçtiyse "m. dakika önce" yazılmalıdır.
Diğer türlü tüm tarihi "DD.MM.YY HH:mm" formatında yazmalıdır. Bu : "gun.ay.yıl saat:dakika" formatıdır. Örneğin : 31.12.16 10:00.
Örneğin:

console.log( formatTarih(new Date(new Date - 1)) ); // "şimdi"

console.log( formatTarih(new Date(new Date - 30 * 1000)) ); // "30 saniye önce"

console.log( formatTarih(new Date(new Date - 5 * 60 * 1000)) ); // "5 dakika önce"

dün için gün 31.12.2016, 20:00
console.log( formatTarih(new Date(new Date - 86400 * 1000)) ); */

// çözüm

// tarih'ten şimdiye kadar geçen süre – tarihleri birbirinden çıkar.

function formatTarih(tarih) {

    let fark = new Date() - tarih; // Farkın ms. cinsinden değeri

    if (fark < 1000) { // 1 saniye önce

        return 'Şimdi';
    }

    let sn = Math.floor(fark / 1000); // farkı saniyeye çevir.

    if (sn < 60) {

        return sn + ' saniye önce';
    }

    let dk = Math.floor(fark / 60000); // farkı dakika çevir

    if (dk < 60) {

        return dk + ' dakika önce';
    }

    // tarihi formatla
    // ve geri kalan tek basamakları iki basamak haline getir.
    let d = tarih;

    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // Her bileşenin son iki hanesini al.

    // bileşenleri tarihe ekle
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatTarih(new Date(new Date - 1))); // Şimdi
console.log(formatTarih(new Date(new Date - 30 * 1000))); // 30 saniye önce
console.log(formatTarih(new Date(new Date - 5 * 60 * 1000))); // 5 dakika önce

// dünün günü şu şekilde: 31.12.2016, 20:00
console.log(formatTarih(new Date(new Date - 86400 * 1000))); // 01.09.22 18:41

// Alternative solution:

function formatDate(date) {

    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;

    if (diffSec < 1) {

        return 'right now';

    } else if (diffMin < 1) {

        return `${diffSec} sec. ago`

    } else if (diffHour < 1) {

        return `${diffMin} min. ago`

    } else {

        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

function formatTarih(tarih) {

    let fark = new Date() - tarih; // Farkın ms. cinsinden değeri

    if (fark < 1000) { // 1 saniye önce

        return 'Şimdi';
    }

    let sn = Math.floor(fark / 1000); // farkı saniyeye çevir.

    if (sn < 60) {

        return sn + ' saniye önce';
    }

    let dk = Math.floor(fark / 60000); // farkı dakika çevir

    if (dk < 60) {

        return dk + ' dakika önce';
    }

    // tarihi formatla
    // ve geri kalan tek basamakları iki basamak haline getir.
    let d = tarih;

    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // Her bileşenin son iki hanesini al.

    // bileşenleri tarihe ekle
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}