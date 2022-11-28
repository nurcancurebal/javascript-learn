/* -> Zaman uyumsuz yineleyiciler ve oluşturucular
Eşzamansız yineleyiciler, isteğe bağlı olarak eşzamansız olarak gelen veriler üzerinde yinelemeye izin verir.

Örneğin, parça parça bir şey indirdiğimizde ve veri parçalarının eşzamansız olarak gelmesini beklediğimizde ve bunlar üzerinde yineleme yapmak istediğimizde, eşzamansız yineleyiciler ve oluşturucular kullanışlı olabilir. Önce sözdizimini kavramak için basit bir örnek görelim ve ardından gerçek hayattaki bir kullanım durumunu gözden geçirelim. */


/* -> zaman uyumsuz yineleyiciler
Asenkron yineleyiciler, birkaç sözdizimsel farklılık dışında normal yineleyicilere benzer.

Sıralı erişim bölümünde açıklandığı gibi “Normal” yinelenebilir nesne şöyle görünür: */

let range1 = {

    from: 1,
    to: 5,

    // for..of bu yöntemi en başta bir kez çağırır
    [Symbol.iterator]() {
        // ...yineleyici nesnesini döndürür:
        // ileriye, for..of yalnızca o nesneyle çalışır, sonraki değerleri ister
        return {

            current: this.from,
            last: this.to,

            // next(), for..of döngüsü tarafından her yinelemede çağrılır
            next() { // (2)

                // değeri bir nesne olarak döndürmelidir {done:.., value :...}
                if (this.current <= this.last) {

                    return { done: false, value: this.current++ };

                } else {

                    return { done: true };
                }
            }
        };
    }
};

for (let value of range1) {

    console.log(value); // 1, 2, 3, 4, 5
}

/* Gerekirse, düzenli yineleyicilerle ilgili ayrıntılar için lütfen yinelenebilirler hakkındaki bölüme bakın.

Nesneyi eşzamansız olarak yinelenebilir yapmak için:

1. Symbol.asyncIterator yerine kullanmamız gerekiyor Symbol.iterator.
2. next() bir sözle dönmelidir.
3. Böyle bir nesne üzerinde yineleme yapmak için for await (let item of iterable) döngü kullanmalıyız.

Önceki gibi yinelenebilir bir nesne yapalım range1, ama şimdi asenkron olarak, saniyede bir değerler döndürecek: */

let range2 = {

    from: 1,
    to: 5,

    // for wait..of için bu yöntemi en baştan bir kez çağırır
    [Symbol.asyncIterator]() { // (1)
        // ...yineleyici nesnesini döndürür:
        // ileriye doğru, wait..of için yalnızca o nesneyle çalışır, sonraki değerleri ister
        return {
            current: this.from,
            last: this.to,

            // next(), for..of döngüsü tarafından her yinelemede çağrılır
            async next() { // (2)
                // değeri bir nesne olarak döndürmelidir {done:.., value :...}
                // (async tarafından otomatik olarak bir söze sarılır)

                // beklemeyi içeride kullanabilir, zaman uyumsuz şeyler yapabilir:
                await new Promise(resolve => setTimeout(resolve, 1000)); // (3)

                if (this.current <= this.last) {

                    return { done: false, value: this.current++ };

                } else {

                    return { done: true };
                }
            }
        };
    }
};

(async () => {

    for await (let value of range2) { // (4)

        console.log(value); // 1,2,3,4,5
    }

})()

/* Gördüğümüz gibi, yapı normal yineleyicilere benzer:

1. Bir nesneyi eşzamansız olarak yinelenebilir yapmak için bir yöntemi olmalıdır Symbol.asyncIterator (1).
2. Nesneyi, next() bir söz veren yöntemle döndürmesi gerekir (2).
3. Yöntem next() olmak zorunda değildir, async söz döndüren normal bir yöntem olabilir, ancak içeride async kullanılmasına izin verir. await Burada sadece bir saniye erteliyoruz (3).
4. Yinelemek için kullanırız for await(let value of range2) (4), yani “for”dan sonra “await” ekleriz. Bir kez çağırır range2[Symbol.asyncIterator]() ve ardından next() değerler için. */

/* İşte küçük bir hile sayfası:

                                             yineleyiciler	       zaman uyumsuz yineleyiciler

Yineleyici sağlamak için nesne yöntemi    	Symbol.iterator     	Symbol.asyncIterator

next() dönüş değeri                        	herhangi bir değer      Promise

döngü yapmak, kullanmak	                    for..of                	for await..of */



/* -> Yayılma operatörü … eşzamansız olarak çalışmıyor
Normal, eşzamanlı yineleyiciler gerektiren özellikler, eşzamansız olanlarla çalışmaz.

Örneğin, bir yayılma operatörü çalışmaz: */

console.log([...range2]); // TypeError: range2 is not iterable

// Bu doğal, bulmayı beklediği gibi , olmadan Symbol.iterator olduğu gibi . değil .for..of await Symbol.asyncIterator