// iki tane aynı işlemi yapan kod bloğu yazdık birincisi arguments operatörü kullanarak yapmayı gösterdik
// ikincisini sadece aradaki farkı görmek için yazdım

function topla() {  // burada toplanın içini boş bıraktık

    let total = 0;

    for (let index = 0; index < arguments.length; index++) { // burada aşağıdakinden farklı arguments kullanıyoruz
        total += arguments[index];
    }
    return total

};

console.log(topla(2, 5, 7, 9, 10));  // farklı olarak arraye gelecek değişkenleri console.log içinde yazdık




function sumArrayValues(array) {

    let total = 0;

    for (let i = 0; i < array.length; i++) {

        total += array[i];

    };

    return total;

};

let dizi = [2, 5, 7, 9, 10];

console.log('toplam', sumArrayValues(dizi))