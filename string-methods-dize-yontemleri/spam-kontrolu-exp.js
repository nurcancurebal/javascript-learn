/* Spam kontrolü

checkSpam(str) adında bir fonksiyon yazın ve bu eğer str ‘viagra’ veya ‘XXX’ gibi değerler alırsa true diğer hallerda false
döndermesi lazım.

Fonksiyon büyük küçük harf duyarsız olması gerekmektedir: */

checkSpam('buy ViAgRA now') // == true
checkSpam('free xxxxx') // == true
checkSpam("innocent rabbit") // == false

function checkSpam(str) {

    if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) {

        return console.log(true);

    } else {

        return console.log(false);
    }
}