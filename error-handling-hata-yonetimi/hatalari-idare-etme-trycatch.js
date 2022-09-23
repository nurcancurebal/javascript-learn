/* -> Hataları idare etme, "try..catch"
Programlarken ne kadar mükemmel olmaya çalışsak da bazen kodumuzda hatalar olabilir. Bu bizim hatalarımızdan dolayı olabileceği gibi, kullanıcı girişlerinden, beklenmeyen server cevaplarından veya binlerce farklı nedenden dolayı oluşabilir.

Genelde kodda bir hata olduğunda yazdığımız kod bir adım ileriye gidemeden sona erer ve konsola bunun nedenini yazar.

Hataları “yakalamak” için “try…catch” kullanarak doğrudan kodun ölmesine aman vermek yerine daha mantıklı şeyler yaptırabiliriz. */


/* -> “try…catch” yazımı
try..catch yapısı iki ana bloktan oluşur: try (dene) ve sonrasında catch (yakala): */

try {

    // kod...

} catch (err) {

    // hataları idare et.

}

/* Çalışması aşağıdaki gibidir:

1. Önce try {...} içerisindekiler çalıştırılır.
2. Eğer hata yoksa catch(err) görmezden gelinir: çalışma try’ın sonuna ulaşır ve sonra catch'i atlar.
3. Eğer hata meydana gelirse, try'ın çalışması durdurulur ve catch(err) çalışmaya başlar. Buradaki err değişkeni ne olduda hata meydana geldiye dair detayları tutan bir objedir.

Öyleyse try {...} içerisindeki kod doğrudan sona eremez, bize catch içerisinde bunu idare etmemiz için olanak sağlar.

. Hatasız örnek: console.log (1) ve (2)'yi gösterir: */

try {

    console.log('try başladı');  // (1) // try başladı

    console.log('try bitti');   // (2) // try bitti

} catch (err) {

    console.log('Catch görmezden gelindi çünkü bir hata meydana gelmedi.'); // (3)

}

console.log("...Kod normal çalışmasına devam etti."); // ...Kod normal çalışmasına devam etti.


try {

    console.log('try başladı');  // (1) // try başladı

    lalala; // hata,  değişken tanımlı değil!

    console.log('try bitti (hiç erişilemedi)');  // (2)

} catch (err) {

    console.log(`Hata meydana geldi!`); // (3) // Hata meydana geldi!
}

console.log("...Kod normal çalışmasına devam etti."); // ...Kod normal çalışmasına devam etti.


/* -> try..catch sadece çalışma zamanlı hatalar içindir
try..catch'in çalışabilmesi için kod çalışabilir olmalıdır. Diğer bir deyişle geçerli bir JavaScript kodu olmalıdır.

Eğer kod yazımsal olarak hatalıysa çalışmayacaktır, örneğin süslü parantezler açılmış ama kapatılmamışsa: */

/* try {
    {{{{{{{{{{{{
  } catch(e) {

    console.log("JavaScript motoru bunu anlayamaz, çünkü geçerli bir kod değildir.");
} */

/* JavaScript motoru önce kodu okur, sonra çalıştırır. Eğer hata okuma safhasında meydana gelirse bunlara “ayrıştırma-zamanı” hataları denir ve kurtarılamaz hatalardır. Bundan dolayı JavaScript motoru bunları anlayamaz.
 
Bundan dolayı try..catch ancak ve ancak gerçerli kodlarda oluşacak hataları idare edebilir. Bu hatalara “çalışma zamanı hataları” veya bazen “istisnalar”(Exception) denilmektedir. */


/* -> try..catch Senkronize olarak çalışmaktadır
Eğer “zamanlanmış” bir kodda, setTimeout gibi, bir hata meydana gelirse try..catch bunu yakalayamaz: */

try {

    setTimeout(function () {

        noSuchVariable; // kod burada ölecektir.

    }, 1000);

} catch (e) {

    console.log("çalışmaz");
}

/* Bunun nedeni try..catch'in aslında fonksiyonu zamanlayan setTimeout'u kapsamasından dolayıdır. Fakat fonksiyon daha sonra çlışır. O anda aslında motor try..catchi geçmiş olur.
 
Eğer zamanlanmış fonksiyon içerisinde bu hatayı yakalamak istiyorsanız, try..catch bloğunu fonksiyonun içerisine yazmalısınız: */

setTimeout(function () {

    try {

        noSuchVariable; // try..catch hataları yakalayacaktır.

    } catch (e) {

        console.log("hata burada yakalandı!"); // hata burada yakalandı!

    }
}, 1000);