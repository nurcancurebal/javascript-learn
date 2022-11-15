/* -> yeniden atma
Daha önce fark ettiğimiz gibi, .catch gibi davranır try..catch. İstediğimiz kadar çok .then işleyiciye sahip olabiliriz ve ardından .catch hepsinde hataları işlemek için sonunda bir tane kullanabiliriz.

Düzenli try..catch olarak hatayı analiz edebilir ve başa çıkamazsak belki yeniden gönderebiliriz. Aynı şey vaatler için de mümkündür.

throw İçeri girersek , .catch kontrol bir sonraki en yakın hata işleyicisine gider. Ve hatayı ele alır ve normal şekilde bitirirsek, en yakın başarılı .then işleyiciye devam eder.

Aşağıdaki örnekte .catch, hatayı başarıyla işler:*/

// the execution: catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(function (error) {

    console.log("The error is handled, continue normally");

}).then(() => console.log("Next successful handler runs"));

/* Burada .catch blok normal şekilde biter. Böylece bir sonraki başarılı .thenişleyici çağrılır.

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

    console.log(`The unknown error has occurred: ${error}`); // The unknown error has occurred: Error: Whoops!
    // hiçbir şeyi iade etme => yürütme normal yoldan gider
});

// Ardından yürütme , zincir boyunca .catch (*)ilkinden diğerine atlar.(**)