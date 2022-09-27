/* -> Kendi hatalarımızı atma
Diyelim ki json yazım olarak doğru da "name" özelliğini olması gerekirken yoksa ? */

let json = '{ "age": 30 }'; // verinin bütünlüğünde problem var.

try {

    let user = JSON.parse(json); // <-- hata yok

    console.log(user.name); // undefined, ama isim de yok!

} catch (e) {

    console.log("çalışmaz");
}

/* Burada JSON.parse doğru bir şekilde çalışır, "name"'in olmaması aslında bir sorundur.

Hata idaresini birleştirmek adına burada throw operatörü kullanılacaktır. */