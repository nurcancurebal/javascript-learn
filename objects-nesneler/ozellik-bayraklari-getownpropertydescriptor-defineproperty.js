/* -> Özellik bayrakları ve tanımlayıcılar
Objelerin özellikleri saklayabildiğini biliyorsunuz.

Şimdiye kadar özellik basit “anahtar-değer” ikilisiydi. Fakat objenin özelliği aslında bundan daha karmaşık ve daha farklılaştırılabilir özellikler taşımaktadır. */


/* -> Özellik Bayrakları
Obje özellikleri değer dışında, 3 özelliğe sahiptir ( bunlara “bayraklar” denir. )

. yazılabilir – eğer true ise değiştirilebilir aksi halde sadece okunabilir.
. sayılabilir – eğer true ise döngü içinde listelenmiştir, aksi halde listelenmemiştir.
. ayarlanabilir – eğer true ise özellik silinebilir ve nitelikler (attributes) değiştirilebilir, diğer türlü değiştirilemez.

Bunları henüz görmediniz, genel olarak da zaten pek gösterilmezler. Bir özellik yarattığınızda “normal yolla” bu değerlerin tümü true olarak ayarlanır. Fakat biz bunları istediğimiz zaman değiştirebiliriz.

İlk önce bu bayraklar nasıl alınır buna bakalım:

Object.getOwnPropertyDescriptor metodu bir özellik hakkındaki tüm bilgilerin sorgulanabilmesini sağlar.

Yazımı: */

let descriptor1 = Object.getOwnPropertyDescriptor(obj, propertyName);

/* ~ obj
Bilgi alınacak obje

~ propertyName
Özelliğin ismi
Buradan bir değer döner buna “özellik tanımlayıcısı” denir. Bu obje tüm bayrak bilgilerini içerir. */

let user2 = {

  name: "John"
};

let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name');

console.log(JSON.stringify(descriptor2, null, 2));
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
} */

// Bayrakları değiştirmek için Object.defineProperty kullanılabilir.


Object.defineProperty(obj, propertyName, descriptor2)

/* ~ obj, propertyName
Üzerinde çalışılacak obje ve özellik.

~ descriptor2
Uygulanacak özellik tanımlayıcı
Eğer özellik var ise defineProperty bu özelliğin bayraklarını günceller. Diğer türlü, bu özelliği yaratır ve verilen bayrakları ayarlar. Bu durumda eğer bayrak verilmemiş ise false kabul edilir.

Örneğin, aşağıda tüm bayrakları false olarak tanımlanmış bir name özelliğini görmektesiniz. */

let user3 = {};

Object.defineProperty(user3, "name", {

  value: "John"
});

let descriptor3 = Object.getOwnPropertyDescriptor(user3, 'name');

console.log(JSON.stringify(descriptor3, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
} */

/* Bunu “normal yoll” yaratılmış user.name ile karşılaştırdığınızda tüm bayrakların false olduğunu görebilirsiniz. Eğer bizim istediğimiz bu değilse bunları true yapmakta fayda var.

Şimdi bu bayrakların etkilerini inceleyebiliriz. */