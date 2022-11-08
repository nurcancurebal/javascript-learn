/* -> Hataları İşlemek
Yukarıdaki örnekte hataları düşünmedik. Ya kod hata verirse? Callback fonksiyonu buna göre hareket edebilmelidir.

Aşağıda loadScript'in hataları takip eden, geliştirilmiş versiyonu yer almaktadır: */

function loadScript(src, callback) {

    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(null, script); // onload= yüklendiyse
    script.onerror = () => callback(new Error(`Script load error for ${src}`)); // onerror= hata aldıysa

    document.head.append(script);
}

// Eğer başarılı bir şekilde çalışırsa callback(null, script), hata alırsa callback(error) çağırılır.

loadScript('/my/script.js', function (error, script) {

    if (error) {
        // handle error

    } else {
        // script loaded successfully
    }
});

/* Yine bu yöntemin genel bir kullanım olduğunu söyleyebiliriz. Buna “error-first callback” stili denilmektedir.

Düzen şu şekildedir:

1. callback'in ilk argümanı hata için ayrılır. Sonra callback(err) çağırılır.
2. İkinci argüman ise başarılı bir sonuçta gönderilir. Sonra callback(null, result1, result2...) çağrılır.

Böylece tek bir callback fonksiyonu ile hem hata gönderilebilir, hem de cevap dönülebilir. */