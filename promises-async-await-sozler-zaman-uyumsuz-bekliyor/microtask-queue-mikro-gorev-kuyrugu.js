/* -> Mikro görev kuyruğu
Mikro görevler ve olay döngüsü bölümünde gördüğümüz gibi , söz işleyicileri eşzamansız olarak yürütülür. Her .then/catch/finally işleyici önce "mikro görev kuyruğuna" girer ve mevcut kod tamamlandıktan sonra yürütülür.

Async/await vaatlere dayalıdır, dolayısıyla dahili olarak aynı mikro görev kuyruğunu kullanır ve makro görevlere göre benzer önceliğe sahiptir.

Örneğin, bizde:

. setTimeout(handler, 0), bu handler sıfır gecikmeyle çalışmalıdır.
. let x = await f(), fonksiyon f() zaman uyumsuzdur, ancak hemen geri döner.

Aşağıdaki kodda await ise hangisi önce çalışır ? setTimeout */

async function f() {
    return 1;
}

(async () => {
    setTimeout(() => console.log('timeout'), 0);

    await f();

    console.log('await');
})();

// Burada bir belirsizlik yok: await her zaman önce bitirir, çünkü (bir mikro görev olarak) ele almaktan daha yüksek bir önceliğe sahiptir setTimeout.