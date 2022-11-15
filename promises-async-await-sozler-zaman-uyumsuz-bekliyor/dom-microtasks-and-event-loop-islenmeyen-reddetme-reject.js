/* -> işlenmeyen reddetme
Söz verirken hata işleme bölümündeki “işlenmeyen reddetme” olayını hatırlıyor musunuz?

Şimdi JavaScript'in bir reddetmenin ele alınmadığını nasıl bulduğunu açıklayabiliriz.

~ "İşlenmeyen reddetme", mikro görev kuyruğunun sonunda bir söz verme hatasının işlenmemesidir.

Örneğin, bu kodu göz önünde bulundurun: */

let promise1 = Promise.reject(new Error("Promise Failed!"));

window.addEventListener('unhandledrejection', event => {

    console.log(event.reason); // Promise Failed!
});

/* Reddedilenleri oluştururuz promiseve hatayı işlemeyiz. Yani “işlenmeyen reddetme” olayımız var (tarayıcı konsolunda da yazdırılır).

Şöyle ekleseydik olmazdı .catch: */

let promise2 = Promise.reject(new Error("Promise Failed!"));

promise2.catch(err => console.log('caught'));

// hata yok, tamamen sessiz
window.addEventListener('unhandledrejection', event => console.log(event.reason));

// Şimdi diyelim ki hatayı yakalayacağız, ancak sonra setTimeout:

let promise3 = Promise.reject(new Error("Promise Failed!"));

setTimeout(() => promise3.catch(err => console.log('caught')));

// Error: Promise Failed!
window.addEventListener('unhandledrejection', event => console.log(event.reason));

/* Şimdi işlenmeyen reddetme tekrar görünür. Neden? Niye? Çünkü unhandledrejectionmikro görev sırası tamamlandığında oluşturulur. Motor vaatleri inceler ve bunlardan herhangi biri "reddedildi" durumundaysa olay tetiklenir.

Örnekte, .catcheklenen setTimeouttetikleyiciler de elbette öyle, ancak daha sonra unhandledrejection, zaten gerçekleşti. */