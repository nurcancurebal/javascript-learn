/* -> setInterval
setInterval setTimeout ile aynı yazıma sahiptir:

let timerId = setInterval(func|code, delay[, arg1, arg2...])

Tüm argümanlar aynı anlama gelir. Fakat setTimeout'a nazaran fonksiyonu sadece bir defa değil belirtilen zamanda sürekli olarak çalıştırır.

Bu zamanyalayıcı iptal etmek için clearInterval(timerId) kullanılmalıdır.

Aşağıdaki örnekte mesaj her iki saniyede bir gönderilecektir. 5 saniye sonunda ise durdurulur. */

// her iki sn'de tekrar et
let timerId = setInterval(() => console.log('tick'), 2000);

// 5 saniye sonunda durdur.
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);


/* -> Popup ekranında Chrome/Opera/Safari zamanı durdurur.
IE ve Firefox tarayıcılarda ekranda console.log/confirm/prompt olduğu sürece zamanlayıcı çalışmaya devam eder, fakat Chrome, Opera ve Safari bu zamanı durdurur.

Bundan dolayı eğer yukarıdaki kodu çalıştırır ve iptal’e basmazsanız Firefox/IE’de bir sonraki console.log durmadan gösterilir. Fakat Chrome/Opera/Safari’de kapatıldıktan sonra 2 sn sonra tekrar console.log gelir. */