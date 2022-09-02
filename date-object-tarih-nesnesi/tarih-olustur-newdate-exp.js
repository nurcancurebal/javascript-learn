/* Tarih oluştur

Yerel saat diliminde Feb 20, 2012, 3:12am için bir Date objesi oluşturun.

console.log ile ekrana basın.

çözüm */

// new Date varsayılanda local zamanı kullanır.Burada hatırlanması gereken tek şey ayların 0’dan başladığıdır.
// Bundan dolay February( Şubat )'ın indeksi 1’dir.

let d = new Date(2012, 1, 20, 3, 12);

console.log(d); // 2012-02-20T01:12:00.000Z