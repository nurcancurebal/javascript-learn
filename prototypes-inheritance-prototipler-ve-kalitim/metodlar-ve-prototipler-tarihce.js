/* -> Tarihçe
[[Prototype]]'ı ayarlayabileceğimiz yöntemleri saymaya kalsak baya zorluk yaşarız. Çok fazla yöntem bulunmaktadır.

Neden?

Birçok nedeni bulunmaktadır.

. Yapıcının "prototype" özelliği ilk javascript ortaya çıktığından beri bulunmaktadır.

. 2012’de: Object.create bir standart olarak oturdu. Bu verilen prototip ile objeleri yaratmaya izin verdi. Fakat bunları almaya veya ayarlamaya değil. Bundan dolayı tarayıcılar bir standart olmayan __proto__ erişimcilerini uygulayarak alıcı ve ayarlayıcılara ( get/set)'e izin verdi.

. 2015’te: Object.setPrototypeOf ve Object.getPrototypeOf bir standart olarak eklendi. __proto__ defakto şeklinde aslında her yerde kullanılmıştı, Bundan dolayı çokta kulllanılan özellikler olmadı, sadece tarayıcı harici çevrelerde kullanılır oldu.

Artık bunların hepsi bizim kullanımımızdadır.

Teknik olarak [[Prototype]]'ı istediğimiz an alma/ayarlama işi yapabiliriz. Fakat genelde bunu sadece obje yaratırken kullanır ve daha sonra düzenleme yapmayız: rabbit, animaldan kalıtım alır fakat onu değiştirmez. JavaScript motorları da bunu yüksek derecede optimize edebilir. Prototipi Object.setPrototypeOf veya obj.__proto__ ile sonradan değiştirmek oldukça yavaş bir operasyondur. Ama mümkündür. */