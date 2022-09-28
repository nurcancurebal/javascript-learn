/* -> yeniden atma
Daha önce fark ettiğimiz gibi, .catchgibi davranır try..catch. İstediğimiz kadar çok .thenişleyiciye sahip olabiliriz ve ardından .catchhepsinde hataları işlemek için sonunda bir tane kullanabiliriz.

Düzenli try..catcholarak hatayı analiz edebilir ve başa çıkamazsak belki yeniden gönderebiliriz. Aynı şey vaatler için de mümkündür.

throwİçeri girersek , .catchkontrol bir sonraki en yakın hata işleyicisine gider. Ve hatayı ele alır ve normal şekilde bitirirsek, en yakın başarılı .thenişleyiciye devam eder.

Aşağıdaki örnekte .catch, hatayı başarıyla işler: */

// the execution: catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(function (error) {

    console.log("The error is handled, continue normally");

}).then(() => console.log("Next successful handler runs"));

/* Burada .catchblok normal şekilde biter. Böylece bir sonraki başarılı .thenişleyici çağrılır.

Aşağıdaki örnekte diğer durumu görüyoruz .catch. İşleyici (*)hatayı yakalar ve bununla başa çıkamaz (örneğin, yalnızca nasıl işleneceğini bilir URIError), bu nedenle tekrar atar: */

// the execution: catch -> catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(function (error) { // (*)

    if (error instanceof URIError) {
        // idare et
    } else {
        console.log("Can't handle such error");

        throw error; // bunu veya başka bir hatayı atmak bir sonraki yakalamaya atlar
    }

}).then(function () {

    /* burada asla koşmaz */
}).catch(error => { // (**)

    console.log(`The unknown error has occurred: ${error}`);
    // hiçbir şeyi iade etme => yürütme normal yoldan gider
});

/* Ardından yürütme , zincir boyunca .catch (*)ilkinden diğerine atlar.(**)

Aşağıdaki bölümde pratik bir yeniden atma örneği göreceğiz. */