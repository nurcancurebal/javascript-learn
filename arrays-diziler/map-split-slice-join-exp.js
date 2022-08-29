/* border-left-width'i borderLeftWidth gibi deve hörgücü(camelcase) şekline getiren fonksiyonu yazınız.

camelize(str) fonksiyonu yazınız. Bu metod “benim-öz-geçmişim” gibi yazılan kelimeleri “benimÖzGeçmişim” şekline getiren fonksiyonu yazınız.

Bu fonksiyon: tüm tireleri silmeli, dashten sonraki kelimenin ilk harfi büyük harf haline getirilmeli.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Not: split kullanarak karakterleri dizi haline getirebilirsiniz, bunu join ile tekrar karakter dizisi haline getirin. */


function camelize(str) {

  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition