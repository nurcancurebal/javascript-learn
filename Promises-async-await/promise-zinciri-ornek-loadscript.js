/* -> Örnek: loadScript
Yukarıda bahsettiğimiz zincir yapısını, önceki bölümlerde tanımladığımız previous chapter örneğindeki içeriği kullanmak için tanımlayalım: */

loadScript("/article/promise-chaining/one.js")
    .then(function (script) {

        return loadScript("/article/promise-chaining/two.js");
    })
    .then(function (script) {

        return loadScript("/article/promise-chaining/three.js");
    })
    .then(function (script) {
        // scriptlerde tanımlı fonksiyonların
        // yüklendiğini doğrulamak için çağıralım
        one();
        two();
        three();
    });

// Arrow fonksiyon notasyonu kullanılarak daha kısa bir biçimde şöyle de yazılabilir:

loadScript("/article/promise-chaining/one.js")
    .then(script => loadScript("/article/promise-chaining/two.js"))
    .then(script => loadScript("/article/promise-chaining/three.js"))
    .then(script => {
        // scriptler yüklendi, fonksiyonlar artık çağrılabilir
        one();
        two();
        three();
    });

/* Burada her loadScript çağrısı bir Promise döndürmekte ve takip eden .then işleyicisi bu Promise değeri ortaya çıktığında çalışmakta. Böylelikle scriptler birbiri ardına yüklenebilmekte.

Yukarıdaki kod bloğunun halen sade bir yapı halinde olduğuna da dikkat etmekte fayda var. Kod bloğu sağ tarafa doğru değil aşağı yönde genişleme göstermekte. Burada herhangi bir şekilde “kıyamet piramidi / callback cehennemi” yapısının oluşmadığını görebiliriz.

.then işleyicisini doğrudan loadScript fonksiyonu üzerinden de çağırabiliriz: */

loadScript("/article/promise-chaining/one.js").then(script1 => {
    loadScript("/article/promise-chaining/two.js").then(script2 => {
        loadScript("/article/promise-chaining/three.js").then(script3 => {
            // script1, script2 ve script3 parametrelerine erişilebilir
            one();
            two();
            three();
        });
    });
});

/* Burada yukarıda bahsettiğimiz büyüme yönü bu kod bloğunda sağa doğru olmakta. Yani callback ile yaşadığımız sorunlar burada da oluşmaya başlayacaktır.

Promise yapısını yeni kullanmaya başlayan kişiler bazen zincir yapısı hakkında fikir sahibi olmadıkları için yukarıdaki kod bloğuna benzer bir yapı kurabilirler. Fakat bu da kodun okunabilirliğini/sürdürülebilirliğini azaltmaktadır. Bundan dolayı zincir yapısının kullanımı tercih edilmelidir.

Fakat bunun da istisnai olarak kullanılması gereken durumlar ortaya çıkabilmektedir. Örneğin; script1, script2 ve script3 parametrelerine en içteki işleyiciden erişilmesi gereken bir durumun oluşabilmesi gibi. */


/* -> Thenable
.then işleyicisi herhangi bir “thenable” obje döndürebilir ve bu, aynı bir Promise objesi gibi işlem görür.

Bir “thenable” objesi, üzerinde .then metodu tanımlı herhangi bir objedir.

Buradaki düşünce, 3. parti kütüphanelere kendi Promise uyumlu objelerini geliştirebilme esnekliği sunmaktır. Bu kütüphaneler kendi istekleri doğrultusunda farklı metodları objelerine ekleyebilirler.

Aşağıda bir “thenable” obje örneği mevcut: */

class Thenable {

    constructor(num) {

        this.num = num;
    }
    then(resolve, reject) {

        console.log(resolve); // function() { native code }
        // this.num*2 değerini 1 saniye sonra çözümle

        setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}

new Promise(resolve => resolve(1))
    .then(result => {

        return new Thenable(result); // (*)
    })
    .then(console.log); // 2 değerini 1000ms sonra gösterir

/* JavaScript (*) olan satırda .then tarafından dönen objeyi kontrol eder: eğer bu obje üzerinde .then metodu tanımlıysa resolve ve reject fonksiyonlarını parametre olarak .then fonksiyonuna sağlar ve bu metodlardan biri çağırılıncaya dek bekler.

Yukarıdaki örnekte resolve(2) metodu (**) satırı yorumlandıktan 1 saniye sonra çağrılır. Ortaya çıkan sonuç sonrasında Promise Zinciri üzerinde aşağı doğru gidecektir.

Bu özellik sayesinde Promise Zinciri özelliğine sahip objelerin yaratımı Promise objesinden kalıtılmak zorunda olmaksızın yapılabilir. */