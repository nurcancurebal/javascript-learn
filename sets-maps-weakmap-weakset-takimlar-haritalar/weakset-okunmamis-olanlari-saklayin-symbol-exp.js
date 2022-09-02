/* "okunmamış" olanları saklayın

Mesajların bulunduğu bir dizi düşünün:

let mesajlar = [
    {metin: "Merhaba", kimden: "Ahmet"},
    {metin: "Nasıl Gidiyor?", kimden: "Ahmet"},
    {metin: "Sonra görüşürüz", kimden: "Mehmet"}
];

Kodunuz bu diziye erişebilir, fakat mesajlar başkasının koduyla yönetiliyor. Yeni mesajların eklenmesi, eskilerin silinmesi gibi olayların ne zaman olduğunu bilmiyorsunuz.

Peki “okunmuş mesajlar”'ı bulabilmek için ne tür bir veri yapısı kullanmanız gerekmektedir? Bu yapı “okundu mu?” sorusuna doğru bir şekilde cevap verebilmeli.

Not: mesajlar'dan herhangi bir mesaj silindiğinde sizin yapınızda da bu mesaj silinmelidir.

Not: Mesaj objesini doğrudan değiştirmemelisiniz. Başkasının kodu olduğundan ekstra özellikler beklenmeyen sorunlara neden olabilir.

çözüm */

// En mantıklı çözüm WeakSet'tir.

let mesajlar = [
    { metin: "Merhaba", kimden: "Ahmet" },
    { metin: "Nasıl Gidiyor?", kimden: "Ahmet" },
    { metin: "Sonra görüşürüz", kimden: "Mehmet" }
];

let okunanlar = new WeakSet();

// iki mesaj okundu
okunanlar.add(mesajlar[0]); // add(value) – bir değer ekler, set’in kendisini döndürür
okunanlar.add(mesajlar[1]);
// okunanlar'ın iki elemanı var.

// ... Birincisi tekrar okunursa
okunanlar.add(mesajlar[0]);
// okunanlar hala 2 tane eşsiz elemana sahip


// cevapla:mesajlar[0] okundu mu?
console.log("Read message 0: " + okunanlar.has(mesajlar[0])); // Read message 0: true

mesajlar.shift();
// şimdi mesajların 1 elemanı var ( teknik olarak hafıza daha sonra silinebilir)

/* WeakSetmesajların saklanmasını ve içinde aranan mesajların olup olmadığını söyleyebilecek bir mekanizmadır.

Kendini otomatik olarak temizler. Burada karşılaşılan zorluk döngüye girmemesidir. “tüm okunan mesajlar”'ı doğrudan gösteremez. Fakat bunu diziyi döngüye sokup sonrasında bu WeakSet'te olanları filtreleyerek çözebilirsiniz.

Not: Her mesaja kendi özelliğimizi eklemek eğer mesajlar dizisi başkası tarafından yönetiliyor ise tehlikeli olabilir, fakat bunu çözmek için symbol kullanılabilir.

Aşağıdaki gibi: */

// symbolic özellikler sadece bizim kodumuz tarafından bilinir.
let okunduMu = Symbol("okunduMu");

mesajlar[0][okunduMu] = true;

/* Şimdi eğer başkası for..in ile mesajlar dizisini dönmeye çalışsa bile gizli olarak eklediğimiz okunduMu görünmeyecektir. */