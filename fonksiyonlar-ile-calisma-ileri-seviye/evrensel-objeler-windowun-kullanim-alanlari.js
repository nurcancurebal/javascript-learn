/* -> “window”'un kullanım alanları
Node.JS gibi sunucu ortamlarında, global obje çok az kullanılır. Hatta hiçbir zaman diyebiliriz.

Buna rağmen window bazı durumlarda kullanılmaktadır.

Genelde, kullanmak çok iyi bir fikir olmasa da, aşağıda bazı örnekleri görebilirsiniz.

1. Eğer evrenselde bulunan değişken ile fonksiyon içindeki değişken ismi aynı ise; */

var kullanici = "Evrensel";

function selamVer() {

    var kullanici = "Yerel";

    console.log(window.kullanici); // Evrensel
}

selamVer();

/* Bu sizi çözüme ulaştırır fakat değişkenlere farklı isimler vermek daha iyidir, böylece window kullanmanıza gerek kalmaz. Ayrıca dikkat ederseniz kullanici tanımlamak için var kullanılmıştır. let kullanılmış olsaydı window'dan bu değeri alamazdınız.

2. Global bir değişkenin var olup olmadığına bakar.

Örneğin, XMLHttpRequest'in global bir fonksiyon olup olmadığını kontrol etmek isterseniz, if (XMLHttpRequest) şeklinde yazamazsınız, çünkü XMLHttpRequest yoksa hata verecektir.

Bunu window.XMLHttpRequest üzerinden okuyabilirsiniz. */

if (window.XMLHttpRequest) {

    console.log('XMLHttpRequest tanımlı!')
}

/* Eğer böyle bir global fonksiyon olmasaydı undefined dönerdi.

window olmadan da bunu test etmek mümkündür: */

if (typeof XMLHttpRequest == 'function') {

    /*  XMLHttpRequest? fonksiyonu var mı? */
}

/* Burada window kullanılmasa da (teorik olarak) daha az güvenilirdir, çünkü typeof yerel XMLHttpRequest kullanabilir, halbuki biz evrensel olanını kontrol etmek istiyoruz.

3. Doğru pencereden değişken alma. Bu en uygun kullanım şeklidir.

Tarayıcıda birçok sekme ve pencere açılabilir. Bir pencere diğerini <iframe> içerisinde gösterebilir. Her tarayıcı kendine ait window objesine ve bunun global değişkenlerine sahiptir. JavaScript pencerelerin (aynı site içerisinde ise) birbirlerinden değişken almalarına izin verir.

Bu biraz amacının dışında da olsa şuna benzer:

<iframe src="/" id="iframe"></iframe>

<script>
  console.log( innerWidth ); //  içerideki boyutu alır ( sadece tarayıcı için)
  console.log( Array ); // o anki pencerenin dizisini alır.geçerli pencerenin Dizisini al (javascript çekirdeği yerleşik)

   iframe yüklendiğinde...
  iframe.onload = function() {

     iframe'in genişliğini al
    console.log( iframe.contentWindow.innerWidth );

     iframe penceresinin dizisini al.
    console.log( iframe.contentWindow.Array );
  };
</script>

Burada ilk iki console.log var olan pencereyi kullanmaktadır, geriye kalan iki tanesi de iframe'den değişken almaktadır. Bu eğer iframe aynı protocol/host/port’tan besleniyor ise herhangi bir değişken olabilir. */