// Sözü çok iyi anlamak için önce geri aramayı anlayalım. Aşağıdaki geri aramalara bakalım. Aşağıdaki kod bloklarından,
// geri arama ve vaatler arasındaki farkı göreceksiniz.

// call back İki parametre alabilen bir callback fonksiyonu görelim. İlk parametre err ve ikincisi sonuçtur. err parametresi
// false ise hata oluşmaz, aksi halde hata döndürür.

// Bu durumda err bir değere sahiptir ve err bloğunu döndürür.


//Callback
const doSomething = callback => {

    setTimeout(() => {

        const skills = ['HTML', 'CSS', 'JS'];

        callback('It did not go well', skills);

    }, 2000);
};

const callback = (err, result) => {

    if (err) {

        return console.log(err);
    }

    return console.log(result);
};

doSomething(callback);
// 2 saniye sonra yazdıracak
// It did not go well

// Bu durumda hata yanlıştır ve sonuç olan else bloğunu döndürür.

const doSomethingTwo = callback => {

    setTimeout(() => {

        const skills = ['HTML', 'CSS', 'JS'];

        callback(false, skills);

    }, 2000);
};

doSomethingTwo((err, result) => {

    if (err) {

        return console.log(err);
    }

    return console.log(result);
});

// 2 saniye sonra becerileri yazdıracak
// [ 'HTML', 'CSS', 'JS' ]