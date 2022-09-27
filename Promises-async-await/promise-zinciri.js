/* -> Promise Zinciri
Callback fonksiyonlarına giriş bölümünde bahsettiğimiz probleme tekrar göz atalım. Burada bir seri asenkron görevin ardaşık bir biçimde çağırılması gerekmekte. Örneğin script dosyalarının yüklenmesi. Bunu Promise ile nasıl yapabiliriz?

Promise bize bunu gerçekleştirebilmemiz için bazı yöntemler sunmakta.

Bu bölümde Promise Zinciri’nden bahsedeceğiz. */

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function (result) { // (**)

    console.log(result); // 1
    return result * 2;

}).then(function (result) { // (***)

    console.log(result); // 2
    return result * 2;

}).then(function (result) {

    console.log(result); // 4
    return result * 2;

});

/* Buradaki yaklaşım, elde edilen sonuçların .then zincirinde tekrar işleme alınmasıdır.

Genel akış şu şekilde:

1. İlk Promise 1 saniye içerisinde sonuçlanır (*),
2. Sonrasında ilk .then işleyicisi çağrılır (**).
3. Bu fonksiyondan dönen değer bir sonraki .then işleyicisine aktarılır (***)
4. …ve zincirleme süreç böyle işlemeye devam eder.

Sonucun işleyiciler arasında aktarılmasıyla birlikte console.log fonsiyonlarının çağırıldığını ve sırasıyla 1 → 2 → 4 çıktılarını verdiğini görürüz.


promise.then çağrısı bir Promise döndürür, böylelikle bir sonraki .then işleyicisi çağırılabilir.

İşleyiciden bir değer döndüğünde, bu Promise’ in sonucu olur. Böylece bir sonraki .then işleyicisi bu değer ile çağrılır.

Promise Zinciri şöyle başlamakta: */

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000);

}).then(function (result) {

    console.log(result);
    return result * 2; // <-- (1)

}) // <-- (2)
// .then…

/* .then işleyicisinden dönen değer yine Promise’ dir, böylece zinciri oluşturacak olan diğer .then işleyicileri (1) ve (2) değerleri üzerinden çağrılabilmektedir.

Aşağıda genel olarak yapılan bir hata görülmekte. Tanımlanmış olan Promise objesinin bir değişkene atanıp bunun üzerinden tekil şekilde .then işleyicisinin çağırılması bir Promise Zinciri oluşturmaz. */

let promise = new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {

    console.log(result); // 1
    return result * 2;
});

promise.then(function (result) {

    console.log(result); // 1
    return result * 2;
});

promise.then(function (result) {

    console.log(result); // 1
    return result * 2;
});

/* Burada tek bir Promise objesine birden fazla işleyicinin eklenmesi ve bu işleyicilerin birbirleri arasında veriyi aktarmadan, yanlızca ilk dönütü birbirlerinden bağımsız olarak işledikleri görülmektedir.

Burada durumu niteleyen akışı görebiliriz (bunu yukarıdaki zincir akışını göz önüne alarak inceleyiniz):


Aynı Promise üzerindeki tüm .then işleyicileri yukarıdaki örnekte aynı sonucu vermekte. Yani console.log fonksiyonu sürekli olarak 1 değerini gösterir.

Genel olarak uygulamalarımızda bir Promise üzerinde birden fazla işleyiciye nadiren ihtiyaç duyulur. Fakat, zincir yapısı ise çok daha sık şekilde kullanılmaktadır. */