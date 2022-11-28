/* -> zaman uyumsuz jeneratörler
Bildiğimiz gibi, JavaScript ayrıca jeneratörleri de destekler ve bunlar yinelenebilir.

Generators bölümünden bir dizi üreteci hatırlayalım. start ile end arasında bir dizi değer üretir: */

function* generateSequence1(start, end) {

    for (let i = start; i <= end; i++) {

        yield i;
    }
}

for (let value of generateSequence1(1, 5)) {

    console.log(value); // 1, 2, 3, 4, 5
}

/* Normalde jeneratörlerde await kullanamayız. Tüm değerler senkronize olarak gelmelidir: içinde gecikmeye yer yoktur for..of, bu senkronize bir yapıdır.

Peki ya await jeneratör gövdesinde kullanmamız gerekirse? Örneğin ağ isteklerini gerçekleştirmek için.

Sorun değil, async şu şekilde başına ekleyin: */

async function* generateSequence2(start, end) {

    for (let i = start; i <= end; i++) {

        // yay, beklemeyi kullanabilirsin!
        await new Promise(resolve => setTimeout(resolve, 1000));

        yield i;
    }
}

(async () => {

    let generator = generateSequence2(1, 5);

    for await (let value of generator) {

        console.log(value); // 1, then 2, then 3, then 4, then 5
    }
})();

/* Şimdi yinelenebilir bir zaman uyumsuz üretecimiz var for await...of.

Gerçekten çok basit. Anahtar kelimeyi ekliyoruz async ve jeneratör artık bunun içinde kullanabilir await, vaatlere ve diğer zaman uyumsuz işlevlere güvenebilir.

Teknik olarak, bir asenkron jeneratörün bir başka farkı, generator.next() yönteminin artık asenkron olması, vaatler vermesidir.

Normal bir jeneratörde result = generator.next() değerleri almak için kullanırdık. await Bir zaman uyumsuz oluşturucuda şunun gibi eklemeliyiz : */

result = await generator.next(); // result = {value: ..., done: true/false}