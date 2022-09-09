/* -> setTimeout ne gösterecek?

Aşağıdaki kodda zamanlanmış bir setTimeout çağrısı bulunmaktadır. Sonrasında 100ms sürecek bir hesap gereklidir.

Zamanlanmış fonksiyon ne zaman çalışacak ?

Döngü bittikten sonra
Döngüden önce
Döngünün başında
console.log ne gösterecek?

let i = 0;

setTimeout(() => console.log(i), 100); // ?

bu fonksiyonu çalışma zamanı >100 ms varsayın.
for(let j = 0; j < 100000000; j++) {

  i++;
}

çözüm */

/* setTimeout'ların hepsi o anda çalışan kod bittikten sonra başlar. // TODO yani bu kod bittikten sonra settime out için 100 ms daha beklettikten sonra i değişkenini ekrana yazacak mı demek?

i en son 100000000 olacaktır. */

let i = 0;

setTimeout(() => console.log(i), 100); // 100000000

// bu fonksiyonu çalışma zamanı >100 ms varsayın.
for (let j = 0; j < 100000000; j++) {

    i++;
}