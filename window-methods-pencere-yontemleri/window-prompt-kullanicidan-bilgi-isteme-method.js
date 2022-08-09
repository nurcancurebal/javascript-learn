// Pencere bilgi istemi yöntemleri, giriş değerlerini almak için tarayıcınızda bir giriş içeren bir bilgi istemi kutusu
// görüntüler ve giriş verileri bir değişkende saklanabilir. istem() yöntemi iki argüman alır. İkinci argüman isteğe
// bağlıdır.


prompt('required text', 'optional text');

let number = prompt('Enter number', 'number goes here');

console.log(number);


// Kullanıcıdan bilgi istemek için prompt fonksiyonu kullanılır. Bu fonksiyon iki tane argümana ihtiyaç duyar:
// result = prompt(başlık[, varsayılan]);
// Modal penceresi içerisinde bir yazı ve OK/CANCEL butonlarını içerir.
// başlık Kullanıcıya gösterilecek yazı.
// default Opsiyonel bir ikinci parametre, input alanı için varsayılan değeri içerir.
// Kullanıcı ekrana çıkan veri girişi kutusuna istediğini yazar ve OK tuşuna basar. İsterse bunu CANCEL tuşuna basarak
// iptal edebilir. Veya Esc tuşu da aynı işlevi görür.
// Eğer kullanıcı değer girdiyse bunu dönderir, eğer girmediyse ve o ekrandan Esc veya CANCEL butonu ile çıktıysa null
// dönderir.