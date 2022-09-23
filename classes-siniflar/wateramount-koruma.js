/* -> “waterAmount” koruma
Önce basit bir kahve makinesi dersi yapalım: */

class CoffeeMachine1 {

    waterAmount = 0; // içindeki su miktarı

    constructor(power) {

        this.power = power;

        console.log(`Created a coffee-machine, power: ${power}`); // Created a coffee-machine, power: 100
    }
}

// Kahve Makinesini Oluşturun
let coffeeMachine1 = new CoffeeMachine1(100);

// su ekleyin
coffeeMachine1.waterAmount = 200;

/* Şu anda mülkler waterAmount ve power halka açık. Bunları dışarıdan herhangi bir değere kolayca alabilir/ayarlayabiliriz.

waterAmount üzerinde daha fazla kontrole sahip olmak için özelliği korumalı olarak değiştirelim . Örneğin, kimsenin onu sıfırın altına koymasını istemiyoruz.


~ Korunan özelliklerin önüne genellikle bir alt çizgi eklenir _.

Bu, dil düzeyinde zorunlu değildir, ancak bu tür özelliklere ve yöntemlere dışarıdan erişilmemesi gerektiğine dair bir kural vardır. Çoğu programcı bunu takip eder.

Böylece mülkümüz çağrılacak _waterAmount: */

class CoffeeMachine2 {

    _waterAmount = 0;

    set waterAmount(value) {

        if (value < 0) throw new Error("Negative water"); // Negative water

        this._waterAmount = value;
    }

    get waterAmount() {

        return this._waterAmount;
    }

    constructor(power) {

        this._power = power;
    }
}

// create the coffee machine
let coffeeMachine2 = new CoffeeMachine2(100);

// add water
coffeeMachine2.waterAmount = -10; //Error: Negative water

// Şimdi erişim kontrol altında, bu nedenle suyu sıfırın altına ayarlamak başarısız oluyor.