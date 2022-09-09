/* Gözetmen dekoratör

spy(func) adında bir dekoratör yazın ve bu fonksiyona gelen tüm çağrıları calls özelliğine kaydetsin.

Çağrıların tamamı argüman dizisi olarak kaydedilsin. */


/* function work(a, b) {

  console.log( a + b ); // work keyfi bir metod veya fonksiyondur.
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for(let args of work.calls) {

  console.log( 'çağrı:' + args.join() ); // "çağrı:1,2", "çağrı:4,5"
} */

/* Not: Birim testleri için dekoratörler oldukça yararlıdır. Bunun daha gelişmiş bir versiyonu sinon.spy olarak Sinon.JS kütüphanesinde bulunmaktadır. */

// çözüm

// Burada calls.push(args) ile f.apply(this,args)'a gönderilen tüm çağrıların argümanları tutulabilir.

function spy(func) {

    function wrapper(...args) {

        wrapper.calls.push(args);

        return func.apply(this, arguments);
    }

    wrapper.calls = [];

    return wrapper;
}

function work(a, b) {

    console.log(a + b); // work keyfi bir metod veya fonksiyondur.
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {

    console.log('çağrı:' + args.join()); // "çağrı:1,2", "çağrı:4,5"
}
//TODO çalış