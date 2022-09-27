/* -> Finally veya sadece kod?

Aşağıdaki iki kod parçacığını karşılaştırınız.

1. İlki finally ile try..catch'den sonra kod çalıştırmaktadır: */

try {

    // bir şeyler çalıştır

} catch (e) {

    // hatalarla uğraş

} finally {

    // temizlik yap
}

// 2. İkinci bölümde ise temizliği doğrudan try..catch sonrasında yap:

try {

    // bir şeyler çalıştır
} catch (e) {

    // hatalarla uğraş
}

// temizlik yap

/* Bu temizlik olayını iş başladıktan sonra bir şekilde hata olsa da olmasa da yapmamız gerekmekte.

Burada finally kullanılmasının bir anlamı var mı? Anlamı var ise bir örnek ile açıklayınız. */

/* çözüm
Bir fonksiyon içerisinden baktığımızda farklılıklar daha aşikar olmakta.

“dışarı sıçra” seçeneği olduğunda try..catch davranışı daha farklı olmaktadır.

Örneğin try..catch içerisinde bir return olduğunda. try..catch bloğunun sonunda her türlü finally'e uğramak zorunludur, bu return bile olsa. */

function f() {

    try {

        console.log('start');

        return "result";

    } catch (e) {

        /// ...
    } finally {

        console.log('cleanup!');
    }
}

f(); // cleanup!

// …Veya aşağıdaki gibi throw varsa:

function f() {

    try {

        console.log('start'); // start

        throw new Error("an error");

    } catch (e) {

        // ...
        if ("can't handle the error") {

            throw e;
        }

    } finally {

        console.log('cleanup!') // cleanup!
    }
}

f();

// Burada finally temizliğin yapılacağının garantisini verir. Eğer temizlik kodunu f'in sonuna koyarsanız çalışmayabilir.