// throw: throw ifadesi özel bir hata oluşturmamızı sağlar. Bir dizi, sayı, boolean veya bir nesne aracılığıyla yapabiliriz. Bir
// özel durum oluşturmak için throw ifadesini kullanın. Bir istisna oluşturduğunuzda, ifade istisnanın değerini belirtir.
// Aşağıdakilerin her biri bir özel durum oluşturur:


throw 'Error2'; // bir dize değeriyle bir istisna oluşturur
throw 42;       // 42 değeriyle bir istisna oluşturur
throw true;     // true değeriyle bir istisna oluşturur
throw new Error('Required'); // Gerekli mesajıyla bir hata nesnesi oluşturur



const throwErrorExampleFun = () => {

    let message;

    let x = prompt('Enter a number: ');

    try {

        if (x == '') throw 'empty';

        if (isNaN(x)) throw 'not a number';

        x = Number(x);

        if (x < 5) throw 'too low';

        if (x > 10) throw 'too high';

    } catch (err) {

        console.log(err);
    };
};

throwErrorExampleFun();

// let x = prompt('Enter a number: ');
//             ^
// ReferenceError: prompt is not defined