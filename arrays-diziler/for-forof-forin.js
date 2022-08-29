/* Döngüler
En eski yöntem for döngüsü kullanarak indeksler üzerinden dönmektir: */

let dizi = ["Elma", "Portakal", "Armut"];

for (let i = 0; i < dizi.length; i++) {

    console.log(dizi[i]);
}

// Diziler için diğer yöntem ise, for..of'dur:

let meyveler = ["Elma", "Portakal", "Erik"];

// Dizi elemanları üzerinden döner.
for (let meyve of meyveler) {

    console.log(meyve);
}

/* for..of var olan elemanın kaçıncı eleman olduğunun görülmesine izin vermez, sadece değeri döner. Fakat çoğu durumda bu daha kısa ve yeterli bir kullanımdır.

Teknik olarak diziler objedir, bundan dolayı for..in kullanmak mümküdür. */

let arr = ["Elma", "Portakal", "Erik"];

for (let key in arr) {

    console.log(arr[key]); // Elma, Portakal, Erik
}

/* Fakat bu bazı problemlere neden olur:

1. for..in döngüsü var olan tüm özelliklerin üzerinden geçer, sadece sayısal olanların değil.

“dizi-benzeri” objeler bazı tarayıcı ve diğer çevrelerde kullanılmaktadır. Bunlar “dizi gibi dururlar”, length ve indeks özelliklerine sahiptirler fakat sayısal olmayan özelliklere sahip metodlar da bulunmaktadır. Genelde bunlara ihtiyaç duyulmaz. for..in döngüsü bunları da listeler. Bundan dolayı dizi-benzeri bir obje ile çalışılacaksa, bu “ekstra” özellikler problem teşkil edebilir.

2. for..in döngüsü genel objeler için kullanışlıdır, diziler için değil. Bundan dolayı diziler için kullanıldığında 10-100 kata kadar daha yavaştır. Tabi hala hızlı sayılır. Bu hız sadece darboğaz(bottleneck) olduğunda önem kazanır, aksi halde anlamsızdır. Fakat yine de bu farkı bilmek iyidir.

Genel olarak, for..in diziler ile kullanılmaz. */