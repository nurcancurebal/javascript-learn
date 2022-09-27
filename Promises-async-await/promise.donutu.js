/* -> Promise Dönütü
Normal koşullarda .then işleyicisinden dönen değer doğrudan sonraki işleyiciye bir parametre olarak aktarılır. Fakat burada bir istisna var.

Şayet dönen değer yine bir Promise ise zincirleme akış bu Promise sonuçlanana dek durur, yeni değerin gelmesini bekler. Sonrasında gelen dönüt bir sonraki .then işleyicisine aktarılır. */

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000);

}).then(function (result) {

    console.log(result); // 1

    return new Promise((resolve, reject) => { // (*)

        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) { // (**)

    console.log(result); // 2

    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) {

    console.log(result); // 4

});

/* Buradaki ilk .then işleyicisi console.log fonksiyonu ile 1 değerini gösterir ve yeni bir Promise objesi oluşturarak döndürür. Bir sonraki .then işleyicisi result parametresi olarak gönderdiğimiz Promise’ i alır. 1000ms sonrasında bu Promise sonuçlanır ve kendi tanım aralığındaki result değerini kullanarak result * 2 değerini döner.(**) satırında tanımlanmış olan işleyici içerisindeki console.log fonksiyonu çalışır ve 2 değerini gösterir.

Sonuç olarak console.log fonksiyonları birer saniyelik gecikmeyle birlikte sırasıyla 1 → 2 → 4 çıktılarını gösterir.

Promise dönütü oluşturabiliyo olmak bize asenkron zincir yapıları oluşturma kolaylığı sağlar. */