// indexOf()

let string = '30 Days Of JavaScript';

console.log(string.indexOf('D')); //ekran çıktısı= 3

console.log(string.indexOf('Days')); //ekran çıktısı= 3

console.log(string.indexOf('days')); //ekran çıktısı= -1

//içine yazdığın şeyin nerede olduğunu söyler hiç yoksa -1 döner
//IndexOf() ilk bulduğunun nerede olduğunu döndürür
//lastIndexOf() = son bulduğunun nerede olduğunu döndürür


/* İsteğe bağlı olan ikinci parametre aramaya nereden başlanacağının belirtilmesine yarar.
Örneğin "an"'ın ilk bulunduğu pozisyon 8'dir. Bir sonraki denk gelişi ise 19. pozisyonda olur. */

let str = "N`aber Canım - Tavşan";

console.log(str.indexOf('an', 9)); // 19


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

while ((poz3 = str3.indexOf(hedef3, poz3 + 1)) != -1) { // TODO

    console.log(poz3);
}

/* 
11
27
43 */