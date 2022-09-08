/* -> setTimeout(…,0)
setTimeOut'un farklı bir kullanım şekli daha bulunmakta: setTimeout(func, 0)

Bu func'ın mümkün olduğu anda zamanlanmasını sağlar. Fakat zamanlayıcı bunu sadece o anki kod işlemi bittiğinde gerçekleştirir.

Bundan dolayı zamanlayıcı o anki işin “hemen arkasından” çalışmaya başlar. Diğer bir deyişle “asenkron”.

Örneğin aşağıdaki kod önce “Merhaba” ve hemen arkasından “Dünya” yazdırır. */

setTimeout(() => console.log("Dünya"), 0);

console.log("Merhaba");
// Merhaba
// Dünya

/* İlk satırda “çağrıyı 0ms sonra sıraya koy” demektir. Fakat zamanlayıcı bunu “önce sırayı kontrol et”'ten sonra bakar yani o anki kodu çalıştırdıktan sonra. Bundan dolayı "Merhaba" önce yazılır "Dünya" sonra. */