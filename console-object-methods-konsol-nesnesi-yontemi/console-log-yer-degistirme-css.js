// Bu bölümde konsol ve konsol nesne yöntemlerini ele alacağız. Mutlak yeni başlayanlar genellikle hangisini kullanacaklarını bilmezler:
// console.log(), document.write() veya document.getElementById.

// Tarayıcı konsolunda çıktıyı göstermek için konsol nesne yöntemlerini kullanıyoruz ve çıktıyı tarayıcı belgesinde (görüntüleme portu) 
// göstermek için document.write kullanıyoruz. Her iki yöntem de yalnızca test etme ve hata ayıklama amacıyla kullanılır. Konsol yöntemi,
// tarayıcıdaki en popüler test ve hata ayıklama aracıdır. DOM ile etkileşim kurmak istediğimizde, JavaScript kullanmayı denediğimizde
// document.getElementById() kullanırız. DOM'u başka bir bölümde ele alacağız.

// Konsol, ünlü consol.log() yöntemine ek olarak, başka yöntemler de sağlar.

// console.log()
// Tarayıcı konsolunda çıktıyı göstermek için console.log() kullanıyoruz. Değerleri değiştirebiliriz ve ayrıca %c kullanarak oturumu
// kapatma stilini belirleyebiliriz.

// Tarayıcı konsolunda çıktı gösteriliyor

console.log('30 Days of JavaScript'); // 30 Days of JavaScript

// Yer değiştirme

console.log('%d %s of JavaScript', 30, 'Days'); // 30 Days of JavaScript

// CSS: Günlük mesajına css kullanarak stil verebiliriz. Sonucu görmek için aşağıdaki kodu kopyalayın ve tarayıcı konsoluna yapıştırın

console.log('%c30 Days Of JavaScript', 'color:green'); // 30 Days Of JavaScript(çıktı yeşil oluyor)

console.log(
    '%c30 Days%c %cOf%c %cJavaScript',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
);  // 30 Days Of JavaScript(30 Days(yeşil) Of(kırmızı) JavaScript(sarı))