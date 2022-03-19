// ! ----------------------------------------------------------------------



// ! ----------------------------------------------------------------------

/* 
 const adi = "Nurcan Cürebal";
 const fill = "Seni Seviyorum"
 const mesaj = `# ${adi} ${fill} #`


 startRun()

 async function startRun(){
     for (let index = 0; index <= mesaj.length; index++) {
         await new Promise(r => setTimeout(r, 100));
         const messageControl = mesaj.slice(0, index).length <= 1

         if(!messageControl && index >= 3) console.log(mesaj.slice(0, index))
     }

     endRun()
 }

 async function endRun(){
     for (let index = mesaj.length; index >= 1; index--) {
         await new Promise(r => setTimeout(r, 100));

       const messageControl = mesaj.slice(0, index).length <= 1

         if(!messageControl && index != mesaj.length) console.log(mesaj.slice(0, index))
     }

     startRun()
 }
 */



// ! ----------------------------------------------------------------------


/*console.log('1hello world')
console.log("2hello world")
console.log("3hello world")*/

//console.log(3%2) = kalan bulma
//console.log(3**2) = üssünü alma

//console.log(typeof 'nurcan') = hangi veri tipinde yazıldığını gösterir

// değişken tanımlarken yalnızca let ( değişkeni değiştirebileceklerinde ) ve const(değişkeni değiştirmeyeceklerinde) kullan 

//let (NurcanınArabasıGüzelSiyah) örnek bir değiişken

// _ ve $ ile değişken başlar diğerleri ile başlamaz

/*let NurcaninYasi= 27, NurcaninKedisi= 'bal'
const Nurcaninsoyadi= 'cürebal'
const NurcaninKocasi= 'erdinç'
console.log(NurcaninYasi,Nurcaninsoyadi,NurcaninKocasi, NurcaninKedisi)*/

// veri türleri (1.primitive data types) = string, number, boolean(true or false), undefined (tanımsız), null (boş değer)

// 2 non primitive data types = objects, functions, arrays(diziler)

/*let numb = ['nurcan', 27, false]
console.log(numb)  
bu bir array örneğidir,  non primitive değişkenlerin değerlerini sonradan değiştirebiliyorken primitive değişkenler değişmez */

/*let obj = {
    adi: 'nurcan',
    soyadi: 'cürebal',
    yaşı: 27
}
console.log(obj)
bu bir obje örneği*/

/* let name = 'nurcan'
let surname = 'cürebal'
let fullName = name + ' ' + surname
console.log(fullName)  */

/* let nurcanyas = 27
let erdincyas = 26
let fullName = nurcanyas + erdincyas
console.log(fullName)           = iki sayı olduğu zaman toplama islemi yapar */

/* const paragraph= 'uzun paragraflarda ters slash \
koyarsak cümlenin sonuna bizi alt satırda yazdıracak\
yalnız ekran çıktısı cümlenin devamı şeklinde olacak\
burada olduğu gibi '
console.log(paragraph) */

/* kaçış oparötörleri
\n = yeni satıra geçecek
\t = tab yani 8 karakterlik boşluk bırakır
\\ = \ işaretini göstermek için 2 tane back slash koyarız ekran çıktısı tek back slash olur
\' = console.log('Nurcan\'ın kocası') ekran çıktısı Nurcan'ın kocası şeklinde olur
\" = aynı şekilde " içinde yazdığın cümlede " geçiyorsa bunu \" şeklinde yazarsın */

// let name= "nurcan"
// let surname = 'cürebal'
// let a = 5
// let b = 4

// let fullName = `Test deneme
// ${a} + ${b} = ${a+b} 
// ${name} ${surname}`

// console.log(fullName)

/* const yasım = 26
adım = "Nurcan Cürebal"
const bilgilerim = "Adım: " +  adım + "  \nYaşım: " + yasım;

console.log(bilgilerim) */

/* 
const firstname = "Nurcan";
const lastname = "Cürebal";
const birthYear = 1995;
const nowYear = new Date().getFullYear();

const newList = `
Adım: ${firstname} ${lastname}
Doğum yılım: ${birthYear}
Şuanki yıl: ${nowYear}
Kaç yaşındayım: ${nowYear - birthYear}
`;

console.log(newList) */


/* string methods 
1. length= kaç karakter uzunluğunda olduğunu söylüyor
let js='javascript'
console.log(js.length)

2. karakterlerin hepsini büyük yazdırma
toUpperCase()
let string= 'javaScript'
console.log(string.toUpperCase())

3. karakterlerin hepsini küçük yazdırma
toLowerCase()
let string= 'javaScript'
console.log(string.toLowerCase())

4. stringde karakterlere erişmek istediğimizde
let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)     = sıfırıncı karaktere ulaştık

5. stringde karakterlerin en sonuncusuna ulaşmak için
let string = 'JavaScript'
let lastIndex= string.length-1
console.log(string[lastIndex]) 

6.karakterleri bölmek için
let string = 'JavaScript'
console.log(string.substr(4,6))   ekran çıktısı = Script 4.karakterden başla 6 karakter uzunluğunda yaz

7.substringde aynı anlama gelir farkı 4. yüde al 6.yı alma demek burada 
let string = 'JavaScript'
console.log(string.substring(4,6)) ekran çıktısı = Sc

8. her bir elemanı dizi elemanı yapma
let string= '30 Days Of JavaScript'
console.log(string.split(' ')) ekran çıktısı= (4) ['30', 'Days', 'Of', 'JavaScript'] 

9. trim() başlangıç ve sondaki gereksiz boşlukları kaldırır 

10. aradığınız kelimenin içerip/ içermediğine bakar
let string= '30 Days Of JavaScript'
console.log(string.includes('Days')) true/ false döner aradığınız kelime varsa true yoksa false döner. büyük/ küçük harfe duyarlıdır

11. replace() iki verinin yerini değiştirme, replaceAll() dersen cümlenin içinde ne kadar o kelimeden varsa hepsini değiştirir
let string= '30 Days Of JavaScript'
console.log(string.replace('JavaScript','Python'))  

12. indexOf()
let string= '30 Days Of JavaScript'
console.log(string.indexOf('D')) ekran çıktısı= 3 
console.log(string.indexOf('Days')) ekran çıktısı= 3
console.log(string.indexOf('days')) ekran çıktısı= -1
içine yazdığın şeyin nerede olduğunu söyler hiç yoksa -1 döner 
IndexOf() ilk bulduğunun nerede olduğunu döndürür

13. lastIndexOf() = son bulduğunun nerede olduğunu döndürür


14. startsWith() ifadenin o kelime ile başlayıp başlamadığına bakar
let string = 'love is the best to in this world'
console.log(string.startsWith('love')) = ekran çıktısı true 
o kelime ile başlamıyorsa false döner 

15.endsWith()
let string = 'love is the best to in this world'
console.log(string.endsWith('love'))   = ekran çıktısı= false o kelime ile bitip bitmediğini söyler

16.
let string = 'I love JavaScript. If you do not love JavaScript what else can you love'
console.log(string.search('love'))  //2 

17.
let string = 'I love JavaScript. If you do not love JavaScript what else can you love'
console.log(string.search(/javascript/gi))  //7 (buradaki i= büyük küçük harf duyarlılığını kapatıyor, g= global anlamda ara demek)

*not= let string='love' bu ifade string bir değişkendir
      let patterOne= /love/ bu bir regex regular(düzenli) ifadedir / ile başlar / ile biter


18. match()= parametre olarak düzenli ifade(regex) alır, eğer bir eşleşme olursa bir dizi döndürür, eşleşme olmazsa null döndürür.
*/
