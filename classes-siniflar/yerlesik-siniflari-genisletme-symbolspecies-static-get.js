/* -> Yerleşik sınıfları genişletme
Array, Map ve diğerleri gibi yerleşik sınıflar da genişletilebilir.

Örneğin, burada PowerArray1 yerelden miras alınır Array1: */

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

/* Lütfen çok ilginç bir şeye dikkat edin. filter, ve diğerleri gibi yerleşik yöntemler map– tam olarak miras alınan türden yeni nesneler döndürür. constructor Bunu yapmak için yapıcı(constructor) özelliğine güvenirler.

Yukarıdaki örnekte, */

arr1.constructor === PowerArray1

/* Bu nedenle arr.filter() çağrıldığında, temel Array1 yerine tam olarak yeni PowerArray1 kullanarak yeni sonuç dizisini dahili olarak oluşturur. Bu aslında çok güzel, çünkü sonuçta PowerArray1 yöntemlerini kullanmaya devam edebiliriz.

Dahası, bu davranışı özelleştirebiliriz.

Sınıfa özel bir statik alıcı Symbol.species ekleyebiliriz. Varsa, haritada(map), filtrede(filter) vb. yeni varlıklar oluşturmak için JavaScript'in dahili olarak kullanacağı yapıcıyı döndürmelidir.

map, filter gibi yerleşik yöntemler istiyorsak normal diziler döndürecek, burada olduğu gibi Symbol.species'te Array döndürebiliriz: */

class Array2 { }

class PowerArray2 extends Array2 {

    isEmpty() {

        return this.length === 0;
    }

    // yerleşik yöntemler bunu yapıcı(constructor) olarak kullanacak
    static get [Symbol.species]() {

        return Array2;
    }
}

let arr2 = new PowerArray2(1, 2, 5, 10, 50);

console.log(arr2.isEmpty()); // false

// filtre, yapıcı olarak arr.constructor[Symbol.species] kullanarak yeni dizi oluşturur
let filteredArr2 = arr2.filter(item => item >= 10); // TODO hata verdi olmadı olacağını iddia ediyor?

// filteredArr2 is not PowerArray2, but Array
console.log(filteredArr2.isEmpty()); // Error: filteredArr.isEmpty is not a function

// Gördüğünüz gibi, şimdi .filter, Array'i döndürüyor. Böylece genişletilmiş işlevsellik daha fazla aktarılmaz.