/* -> “this” ve evrensel objeler
Bazen, this'in değeri tamamen evrensel obje olur. Bu çok nadir de olsa bazı kod sayfalarında görülmektedir.

1. Tarayıcıda this'in global alandaki değeri window'dur: */

// fonksiyonların dışında
console.log(this === window); // true

/* Tarayıcı olmayan çevrelerde ise, this için farklı değer kullanabilirler.

2. Sıkı olmayan modda bir fonksiyon this çağırırsa, evrensel obje olan this'i kabul eder: */

// Sıkı modda değil (!)
function f() {

    console.log(this); // [object Window]
}

f(); // obje olmadan çağırıldı.

/* Tanım gereği, this bu durumda evrensel obje olmalı, Node.JS ortamında olmasa bile this evrensel objedir. Bu eski kodlar ile uyumluluk amacıyladır, sıkı modda this tanımsız olabilir. */


/* -> Polyfill(çoklu dolgular)’ler İçin Kullanma
Modern dil özelliklerinin desteğini test etmek için global nesneyi kullanıyoruz.

Örneğin, yerleşik bir “Promise” nesnesinin olup olmadığını test edelim (gerçekten eski tarayıcılarda yoktur): */

if (!window.Promise) {

    console.log("Senin tarayıcın gerçekten çok yaşlı");
}

/* Hiçbiri yoksa (örneğin, eski bir tarayıcıdayız), “pollyfills(çoklu dolgular)” oluşturabiliriz: çevre tarafından desteklenmeyen, ancak modern standartta var olan işlevler ekleyebiliriz. */

if (!window.Promise) {

    // window.Promise = ... modern dil özelliğinin özel uygulaması
}