// -> Genel Hataları Yakalama


/* -> Ortam-özel
Aşağıdaki bölüm aslında JavaScript çekirdeğinde bulunmamaktadır. */

/* Diyelim ki try..catch'in dışında bir hata ile karşılaştınız ve kodunuz sona erdi. Bu programlama hatası veya başka bir hata olabilir.

Böyle bir durumda ne yapmak lazım? Hataları loglayabilir, kullanıcıya bir hata gösterebiliriz.

Aslında şartnamede bunun ile ilgili bir belirti bulunmasa da çoğu ortam bunu temin eder. Örneğin Node.JS bunun için process.on(‘uncaughtException’)‘i kullanır. Tarayıcıda window.onerror’ özelliğine bir fonksiyon tanımlanabilir. Bu yakalanmayan bir hata olduğunda çalışacaktır.

Yazımı: */

window.onerror = function (message, url, line, col, error) {
    // ...
};

/* ~ message
Hata Mesajı

~ url
Hatanın hangi URL’de meydana geldiği.

~ line, col
Hangi satır ve sütunda hatanın meydana geldiği.

~ error
Hata objesi. */

{/* <script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // hata meydana geldi!
  }

  readData();
</script> */}

/* window.onerror genel hata işleyicisinin görevi aslında kodu kurtarmak değildir. Bu anda kodu kurtarmak imkansızdır, bunun yerine geliştiriciye mesaj gönderebilir.

Bu hataları izlemek için aslında bazı servisler mevcuttur. Bunlardan bazıları https://errorception.com, http://www.muscula.com’dır.

Aşağıdaki gibi çalışırlar:

1. Servise kayıt olunur ve yazdığımız koda yerleştirmek için bir kod parçası alınır.
2. Bu JS içerisinde bir çeşit window.onerror uygulaması mevcuttur.
3. Hata meydana geldiğinde, bu servise ağ üzerinden bir istekte bulunur.
4. Servise tekrar giriş yaptığınızda arayüzde bu hataları görürsünüz. */