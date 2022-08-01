main();

async function main() {

    let a = 30;

    let b;

    setTimeout(() => {

        b = 15;

    }, 4000);   //! 4 sn sonra b' ye 15 ata diye bir function oluşturduk await olmazsa bu fonksiyonu beklemeden çalışacağı için aşağıdaki toplama işlemi hata verir

    await new Promise((r) => setTimeout(() => r(), 5000));
    //! 1 saniye verdiğimiz zaman sonuç nan çıkar; çünkü henüz b için kodların 3 sn daha beklemesi gerek
    //! r ye değer atamadı ama kodların çalışabilmesi için bu await kod bloğunu bekleyeceği için 5 sn verdiğimiz zaman
    //! yukarıdaki b ye 15 atama işlemi önce çalışacağı için toplama işlemine geçtiği zaman b de 15 değeri tanımlı olacak

    console.log(b + a);
};

// 1000 yazıldığı zaman 1 sn bekliyor ve NaN çıkıyor
// 5 sn bekliyor ve 45 yazıyor