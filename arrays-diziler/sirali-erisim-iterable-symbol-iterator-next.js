let aralik = {
    baslangic: 1,
    bitis: 5
};

//! for..of çağırıldığında doğrudan aşağıdaki metod çağırılır.
aralik[Symbol.iterator] = function () { //! aralik değişkeninin içinde Symbol(Symbol.iterator): f... olarak ekledi

    // 2. geriye sıralı erişim elemanı döndürür:
    return {
        current: this.baslangic, // bu fonksiyon current: 1, last: 5 oldu currentin değerini this.baslangic' tan aldi
        last: this.bitis,

        // 3. next(), for..of döngüsü tarafından her yinelemede çağrılır
        // for..of her defasında next() metodunu çağırır.
        next() {
            // 4. bu metod geriye şu şakilde obje döndürmeli {done:.., value :...}
            if (this.current <= this.last) {

                return { done: false, value: this.current++ }; // bu fonksiyonun çıktısı {done: false, value: 1} şeklinde verir

            } else {

                return { done: true }; // value değeri olmadığı için çalışmayı bitirdi
            }
        }
    }; // return sonu
};

// çalışmaya başlıyor
for (let num of aralik) { // num' u value' dan aldı

    console.log(num);
}

// 1
// 2
// 3
// 4
// 5