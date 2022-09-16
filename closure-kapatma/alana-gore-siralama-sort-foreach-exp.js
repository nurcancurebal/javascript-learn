/* Alana göre sıralama

Sıralanacak obje dizisi bulunmaktadır:

let kullanicilar = [
  { ad: "Erdinç", yas: 20, soyad: "Zurnacı" },
  { ad: "Hideo", yas: 18, surname: "Konami" },
  { ad: "Jane", yas: 19, surname: "Hathaway" }
];

Bunu yapmanın en yaygın yolu:

ad'a göre (Ann, Hideo, Jane)
kullanicilar.sort((a, b) => a.ad > b.ad ? 1 : -1);

yaşa göre (Hideo, Jane, Erdinç)
kullanicilar.sort((a, b) => a.yas > b.yas ? 1 : -1);

Aşağıdaki şekle çevirmek mümkün mü?

kullaniclar.sort(alanIle('ad'));
kullaniclar.sort(alanIle('yas'));

Böylece fonksiyon yazmak yerine sadece alanIle(alanAdı) yazılabilir.
alanIle fonksiyonunu yazınız. */

let kullanicilar = [
  { ad: "Erdinç", yas: 20, soyad: "Zurnacı" },
  { ad: "Hideo", yas: 18, soyad: "Konami" },
  { ad: "Jane", yas: 19, soyad: "Hathaway" }
];

function alanIle(alan) {

  return (a, b) => a[alan] > b[alan] ? 1 : -1; // NOT: console.log(kullanicilar[0]['ad']); // Erdinç
}

kullanicilar.sort(alanIle('ad'));
kullanicilar.forEach(kullanici => console.log(kullanici.ad));
/*
Erdinç
Hideo
Jane */

kullanicilar.sort(alanIle('yas'));
kullanicilar.forEach(kullanici => console.log(kullanici.ad));
/*
Hideo,
Jane,
Erdinç */