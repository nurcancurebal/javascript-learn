/* Date.now()
Eğer sadece zaman farkını ölçmek istiyorsanız, Date objesine ihtiyacınız yok.

Bunun için Date.now() adında bir obje bulunmakta.

Mantık olarak new Date().getTime() ile aynı olmasına rağmen yeni bir Date objesi oluşturmamaktadır. Bundan dolayı çok hızlı ve garbage collection’a yük bindirmemiş olur.

Genelde kullanışlı olduğundan veya performans özel JavaScript oyunları gibi uygulamalarda kullanılır.

Aşağıdaki daha iyidir denebilir: */

let start = Date.now(); // 1 Ocak 1970'den şimdiye kadar olan zamanın ms cinsinden değeri

// işi yap
for (let i = 0; i < 100000; i++) {

    let doSomething = i * i * i;
}

let end = Date.now(); // tamamlamış

console.log(`Döngü ${end - start} ms sürdür`); // Döngü 3 ms sürdür, sadece sayılar çıkarıldı tarihler değil.