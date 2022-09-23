/* -> Yerleşik sınıfları genişletme
Array, Map ve diğerleri gibi yerleşik sınıflar da genişletilebilir.

Örneğin, burada PowerArray yerelden miras alınır Array: */

class Array1 { }

// buna bir yöntem daha ekleyin (daha fazlasını yapabilir)
class PowerArray1 extends Array1 {

    isEmpty() {

        return this.length === 0;
    }
}

let arr1 = new PowerArray1(1, 2, 5, 10, 50);

console.log(arr1.isEmpty()); // false

let filteredArr1 = arr1.filter(item => item >= 10);

console.log(filteredArr1); // 10, 50
console.log(filteredArr1.isEmpty()); // false

/* Lütfen çok ilginç bir şeye dikkat edin. filter, ve diğerleri gibi yerleşik yöntemler map– tam olarak miras alınan türden yeni nesneler döndürür. constructorBunu yapmak için mülke güvenirler .

Yukarıdaki örnekte, */

arr1.constructor === PowerArray1

/* Yani çağrıldığında, temel değil arr.filter()tam olarak kullanarak yeni sonuç dizisini dahili olarak oluşturur . Bu aslında çok güzel, çünkü sonuçta daha fazla yöntem kullanmaya devam edebiliriz.new PowerArrayArrayPowerArray

Dahası, bu davranışı özelleştirebiliriz.

Symbol.speciesSınıfa özel bir statik alıcı ekleyebiliriz . Varsa, JavaScript'in içinde yeni varlıklar oluşturmak için dahili olarak kullanacağı yapıcıyı döndürmelidir, mapvb filter.

, gibi yerleşik yöntemlerin normal diziler döndürmesini istiyorsak map, burada olduğu gibi filtergeri dönebiliriz :ArraySymbol.species */

class Array2 { }

class PowerArray2 extends Array2 {

    isEmpty() {

        return this.length === 0;
    }

    // yerleşik yöntemler bunu yapıcı(constructor) olarak kullanacak
    static get [Symbol.species]() {

        return Array;
    }
}

let arr2 = new PowerArray2(1, 2, 5, 10, 50);

console.log(arr2.isEmpty()); // false

// filtre, yapıcı olarak arr.constructor[Symbol.species] kullanarak yeni dizi oluşturur
let filteredArr2 = arr2.filter(item => item >= 10);

// filteredArr2 is not PowerArray2, but Array
console.log(filteredArr2.isEmpty()); // Error: filteredArr.isEmpty is not a function

// Gördüğünüz gibi, şimdi .filtergeri dönüyor Array. Böylece genişletilmiş işlevsellik daha fazla aktarılmaz.