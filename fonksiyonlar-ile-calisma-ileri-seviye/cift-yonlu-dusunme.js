/* -> Çift yönlü düşünme
Başlangıçta us(x,n) adında bir fonksiyon olsun ve bu x üssü n i hesaplasın. Diğer bir ifadeyle x'i n defa kendisiyle çarpsın. */

/*
us(2, 2) = 4
us(2, 3) = 8
us(2, 4) = 16 */

/* Bunu uygulamanın iki yolu bulunmaktadır.

1. Tekrarlı düşünürseniz: for döngüsü: */

function us1(x, n) {

    let sonuc = 1;
    // x'in x defa kendisiyle çarpımı.
    for (let i = 0; i < n; i++) {

        sonuc *= x;
    }

    return sonuc;
}

console.log(us1(2, 3)); // 8

// 2. Özçağrı: işi daha basite indirgeyerek kendisini çağırsın:

function us2(x, n) {

    if (n == 1) {

        return x;

    } else {

        return x * us2(x, n - 1);
    }
}

console.log(us2(2, 3)); // 8

/* Dikkat ederseniz özçağrı fonksiyonu aslen farklıdır. us(x,n) çağrıldığında çalıştırılma iki dala ayrılır.

              if n==1  = x
             /
us(x, n) =
             \
              else     = x * us(x, n - 1)

1. Eğer n==1 ise geriye kalanlar önemsizdir. Buna temel özçağrı denir, çünkü bu belirli bir sonucu çıktı verir: us(x,1) eşittir x

2. Diğer türlü us(x,n) x*us(x,n-1) şeklinde ifade edilebilir. Matematiksel olarak xn = x * xn-1 şeklinde ifade edilebilir.
Buna öztekrar basamağı denir. Görev daha küçük aksiyonlara ( x ile çarpma ) indirgenmiş olur. Ayrıca aynı görevi daha basit görevlerle ( us'ün daha küçük n değeri) indirgenmiş oldu. Bir sonraki sitep ise bunun daha basite indirgene indirgene n'in 1 e ulaşmasını sağlamaktır.

Buna us öz çağrı ile kendisini n==1 olana kadar çağırır diyebiliriz.


us(2,4)'ü hesaplayabilmek için özçağrı şu adımları gerçekleştirir: */

/*
1. us(2, 4) = 2 * us(2, 3)
2. us(2, 3) = 2 * us(2, 2)
3. us(2, 2) = 2 * us(2, 1)
4. us(2, 1) = 2 */

/* özçağrı böylece fonksiyon çağrılarını dah abasite indirgemiştir. Daha sonra daha basite ve en sonunda sonuç belirli olana kadar devam etmiştir.


-> Özçağrı genelde tekrarlı olana göre daha kısadır
Aşağıda aynı fonksiyonun ? ile tekrar yazılmış hali bulunmaktadır. */

function us3(x, n) {

    return (n == 1) ? x : (x * us3(x, n - 1));
}

console.log(us3(2, 3)); // 8

/* Maksimum iç içe çağırma sayısına özçağrı derinliği us fonksiyonunda bu n'dir.

JavaScript motorları maksimum özçağrı derinliğini sınırlamaktadır. Bazı motorlarda 10000, bazılarında 100000 limiti bulunmaktadır. Bunun için otomatik optimizasyonlar bulunmaktadır. Fakat yine de her motorda desteklenmemektedir ve çok basit durumlarda kullanılır.

Bu özçağrı uygulamalarını limitler, fakat yine de çoğu yerde kullanılmaktadırlar. Çoğu görevde özçağrı şeklinde düşünmek daha basit ve sürdürülebilir bod yazmanızı sağlayacaktır. */