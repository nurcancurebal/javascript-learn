/* Promise: then versus catch
Bu kod parçaları eşit mi? Başka bir deyişle, herhangi bir işleyici işlevi için herhangi bir koşulda aynı şekilde mi davranıyorlar? */

promise.then(f1).catch(f2);

// Versus(Karşı):

promise.then(f1, f2);

// çözüm

/* Kısa cevap: hayır, eşit değiller:

Fark, f1'de bir hata meydana gelirse, bunun burada .catch tarafından işlenmesidir: */

promise
    .then(f1)
    .catch(f2);

// …Ama burada değil:
promise
    .then(f1, f2);

/* Bunun nedeni, zincirden bir hata iletilmesi ve ikinci kod parçasında f1'in altında zincir olmamasıdır..

Başka bir deyişle, .then sonuçları/hataları sonraki .then/catch öğesine iletir. Yani ilk örnekte, aşağıda bir yakalama var ve ikincisinde – yok, bu yüzden hata işlenmedi. */