/* Gözetmen dekoratör

spy(func) adında bir dekoratör yazın ve bu fonksiyona gelen tüm çağrıları calls özelliğine kaydetsin.

Çağrıların tamamı argüman dizisi olarak kaydedilsin. */

/* function work(a, b) {

  console.log( a + b );
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

    wrapper.calls.push(args); // 4. args: (2)[1,2]

    return func.apply(this, arguments); // arguments: (2)[1,2], func: work(a,b)
  }

  wrapper.calls = []; // 2. wrapper in içinde calls: (0)[] adında bir array var, (2)[Array(2), Array(2)]

  return wrapper;
}

function work(a, b) {

  console.log(a + b); // 3, 9
}

work = spy(work); // 1. bunu okuyor

work(1, 2); // 3. burayı okuyor
work(4, 5);

for (let args of work.calls) {

  console.log('çağrı:' + args.join()); // "çağrı:1,2", "çağrı:4,5"
}