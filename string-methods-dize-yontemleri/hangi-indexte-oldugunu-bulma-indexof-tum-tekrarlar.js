/* Eğer sizin istediğiniz tüm tekrarlar ise, indexOf'u döngü içerisinde kullanabilirsiniz. Her yeni çağrı bir önceki
pozisyonu tutar: */

let str2 = 'Bir berber bir berbere gel birader beraber bir berber dükkanı açalım demiş';

let hedef2 = 'bir';

let poz2 = 0;

while (true) {

    let bulunanPoz = str2.indexOf(hedef2, poz2);

    if (bulunanPoz == -1) break;

    console.log(`Bulunan poz: ${bulunanPoz}`);

    poz2 = bulunanPoz + 1; // bir sonraki pozisyondan aramaya devam et.
}

/*
Bulunan poz: 11
Bulunan poz: 27
Bulunan poz: 43 */

// Aynı algoritma aşağıdaki şekilde daha kısa bir biçimde yazılabilir:

let str3 = 'Bir berber bir berbere gel birader beraber bir berber dükkanı açalım demiş';

let hedef3 = 'bir';

let poz3 = -1;

while ((poz3 = str3.indexOf(hedef3, poz3 + 1)) != -1) {

    console.log(poz3);
}

/* 
11
27
43 */


/* -> str.lastIndexOf(poz)
Buna benzer başka bir metod daha bulunmaktadır. str.lastIndexOf(pos) bu metod karakter dizisinin sonundan başına doğru
arama yapar
Bulduklarını da yine tersten yazar.
indexOf'tan daha kullanışsızdır. if koşulu olarak aşağıdaki gibi kullanılamaz. */

let str4 = "Bin berber bir berbere gel birader beraber bir berber dükkanı açalım demiş";

if (str4.lastIndexOf("Bin")) {

    console.log("Buldum!"); // çalışmaz!
}

/* Yukarıdaki console.log'ün çalışmamasının nedeni str.lastIndexOf("Bin")'in 0(sıfırıncı index) döndürmesidir. (Bu başlangıçta
değeri bulmasına rağmen) pozisyon 0 döndüğünden if bunu false olarak algılar.
Bundan dolayı -1'i aşağıdaki gibi kontrol etmek gerekmektedir. */

let str5 = "Bin berber bir berbere gel birader beraber bir berber dükkanı açalım demiş";

if (str5.indexOf("Bin") != -1) {

    console.log("Buldum"); // Buldum, Şimdi oldu!
}