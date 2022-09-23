/* -> Salt okunur "güç"
Mülk için power, onu salt okunur yapalım. Bazen bir özelliğin yalnızca oluşturma zamanında ayarlanması ve ardından asla değiştirilmemesi gerekir.

Bir kahve makinesi için durum tam olarak budur: güç asla değişmez.

Bunu yapmak için, yalnızca alıcı yapmamız gerekir, ancak ayarlayıcıyı değil: */

class CoffeeMachine1 {
    // ...

    constructor(power) {

        this._power = power;
    }

    get power() {

        return this._power;
    }

}

// create the coffee machine
let coffeeMachine1 = new CoffeeMachine1(100);

console.log(`Power is: ${coffeeMachine1.power}W`); // Power is: 100W

coffeeMachine1.power = 25; // Error (no setter)


/* -> Alıcı/ayarlayıcı işlevleri
Burada alıcı/ayarlayıcı sözdizimini kullandık.

Ancak çoğu zaman get.../set...aşağıdaki gibi işlevler tercih edilir: */

class CoffeeMachine2 {

    _waterAmount = 0;

    setWaterAmount(value) {

        if (value < 0) throw new Error("Negative water");

        this._waterAmount = value;
    }

    getWaterAmount() {

        return this._waterAmount;
    }
}

new CoffeeMachine2().setWaterAmount(100);

/* Bu biraz daha uzun görünüyor, ancak işlevler daha esnek. Birden fazla argümanı kabul edebilirler (şu anda onlara ihtiyacımız olmasa bile). Bu nedenle, gelecek için, bir şeyi yeniden düzenlememiz gerekirse, işlevler daha güvenli bir seçimdir.

Elbette, bir takas var. Öte yandan, get/set sözdizimi daha kısadır, bu nedenle sonuçta katı bir kural yoktur, karar vermek size kalmış. */


/* -> Korunan alanlar miras alınır
miras alırsak , o zaman hiçbir şey yeni sınıfın yöntemlerine class MegaMachine extends CoffeeMachine2 erişmemizi this._waterAmountveya bunlardan kaçınmamızı engellemez.this._power

Yani korunan alanlar doğal olarak kalıtsaldır. Aşağıda göreceğimiz özel olanların aksine. */