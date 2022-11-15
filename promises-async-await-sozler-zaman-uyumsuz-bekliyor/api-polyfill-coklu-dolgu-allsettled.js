/* -> Polyfill(çoklu dolgu)
Eğer tarayıcı Promise.allSettled özelliğini desteklemiyorsa, polyfill kolaydır. */

if (!Promise.allSettled) {

    Promise.allSettled = function (promises) {

        return Promise.all(promises.map(p => Promise.resolve(p).then(v => ({

            state: 'fulfilled',
            value: v,

        }), r => ({

            state: 'rejected',
            reason: r,
        }))));
    };
}

/* Bu kodda, promises.map giriş değerini alır, p => Promise.resolve(p) ile sözleri döndürüyor (sadece bir söz verilmemişse) ve sonra bunu işleyiciye ekler.

Bu işleyici başarılı bir v sonucusunu {state:'fulfilled', value:v} ve bir r hatasını {state:'rejected', reason:r} olarak çevirir. Bu Promise.allSettled formatıyla aynıdır.

Sonra bazı sonuçları reddetse bile sonuçları almak ya da all sözleri vermek için Promise.allSettledi kullanabiliriz. */