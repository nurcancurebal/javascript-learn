/* Nesne yönelimli programlamanın en önemli ilkelerinden biri, dahili arayüzü harici olandan ayırmaktır.
Bu, bir "merhaba dünya" uygulamasından daha karmaşık bir şey geliştirmek için "zorunlu" bir uygulamadır.
Bunu anlamak için gelişmeden uzaklaşalım ve gözlerimizi gerçek dünyaya çevirelim. Genellikle kullandığımız cihazlar oldukça karmaşıktır.
Ancak dahili arayüzü harici olandan ayırmak, bunları sorunsuz bir şekilde kullanmanıza izin verir. */


/* -> Gerçek hayattan bir örnek
Örneğin, bir kahve makinesi. Dışarıdan basit: bir düğme, bir ekran, birkaç delik… Ve elbette sonuç – harika kahve! :)

"/article/private-protected-properties-methods/kahve.jpg" görseli
Ama içeride… (tamir kılavuzundan bir resim)

"/article/private-properties-methods/coffee-inside.jpg" görseli görseli
Bir sürü detay. Ama hiçbir şey bilmeden kullanabiliriz.

Kahve makineleri oldukça güvenilir, değil mi? Birini yıllarca kullanabiliriz ve ancak bir şeyler ters giderse - tamir için getirin.

Bir kahve makinesinin güvenilirliğinin ve sadeliğinin sırrı – tüm detaylar iyi ayarlanmış ve içeride gizlidir.

Koruyucu kapağı kahve makinesinden çıkarırsak, onu kullanmak çok daha karmaşık (nereye basılmalı?) ve tehlikeli olacaktır (elektrik çarpabilir).

Göreceğimiz gibi, programlamada nesneler kahve makineleri gibidir.

Ancak iç detayları gizlemek için koruyucu bir örtü değil, dil ve geleneklerin özel sözdizimini kullanacağız. */


/* -> Dahili ve harici arayüz
Nesne yönelimli programlamada özellikler ve yöntemler iki gruba ayrılır:

. Dahili arabirim – sınıfın diğer yöntemlerinden erişilebilen, ancak dışarıdan erişilemeyen yöntemler ve özellikler.

. Dış arabirim – sınıf dışından da erişilebilen yöntemler ve özellikler.

Kahve makinesiyle analojiye devam edersek – içinde saklı olan şey: bir kazan borusu, ısıtma elemanı vb. – onun iç arayüzüdür.

Nesnenin çalışması için dahili bir arayüz kullanılır, detayları birbirini kullanır. Örneğin, ısıtma elemanına bir kazan borusu bağlanmıştır.

Ancak dışarıdan bir kahve makinesi koruyucu kapakla kapatılır, böylece kimse bunlara ulaşamaz. Ayrıntılar gizlidir ve erişilemez. Özelliklerini harici arayüz üzerinden kullanabiliriz.

Yani, bir nesneyi kullanmak için ihtiyacımız olan tek şey onun dış arayüzünü bilmek. İçeride nasıl çalıştığının tamamen farkında olmayabiliriz ve bu harika.

Bu genel bir girişti.

JavaScript'te üç tür özellik ve üye vardır:

. Herkese açık: her yerden erişilebilir. Harici arayüzü oluştururlar. Şimdiye kadar sadece genel özellikleri ve yöntemleri kullanıyorduk.

. Özel: yalnızca sınıfın içinden erişilebilir. Bunlar dahili arayüz içindir.

Diğer birçok dilde “korumalı” alanlar da vardır: yalnızca sınıfın içinden ve onu genişletenlerden erişilebilir. Ayrıca dahili arayüz için de kullanışlıdırlar. Bir anlamda özel olanlardan daha yaygındırlar, çünkü genellikle miras alan sınıfların, uzantıyı düzgün bir şekilde yapmak için erişim kazanmasını isteriz.

Korumalı alanlar JavaScript'te dil düzeyinde uygulanmaz, ancak pratikte çok uygundurlar, bu nedenle öykünürler.

Bir sonraki adımda JavaScript'te tüm bu tür özelliklere sahip bir kahve makinesi yapacağız. Bir kahve makinesinin birçok detayı vardır, onları basit kalacak şekilde modellemeyeceğiz (yapabilsek de). */