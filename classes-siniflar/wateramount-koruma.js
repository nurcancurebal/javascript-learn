/* -> “waterAmount” koruma
Önce basit bir kahve makinesi dersi yapalım: */

class CoffeeMachine {

    waterAmount = 0; // the amount of water inside

    constructor(power) {

        this.power = power;

        console.log(`Created a coffee-machine, power: ${power}`);
    }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;

/* Şu anda mülkler waterAmountve powerhalka açık. Bunları dışarıdan herhangi bir değere kolayca alabilir/ayarlayabiliriz.

waterAmountÜzerinde daha fazla kontrole sahip olmak için özelliği korumalı olarak değiştirelim . Örneğin, kimsenin onu sıfırın altına koymasını istemiyoruz.


~ Korunan özelliklerin önüne genellikle bir alt çizgi eklenir _.

Bu, dil düzeyinde zorunlu değildir, ancak bu tür özelliklere ve yöntemlere dışarıdan erişilmemesi gerektiğine dair bir kural vardır. Çoğu programcı bunu takip eder.

Böylece mülkümüz çağrılacak _waterAmount: */

class CoffeeMachine {

    _waterAmount = 0;

    set waterAmount(value) {

        if (value < 0) throw new Error("Negative water");

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
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // Error: Negative water

// Şimdi erişim kontrol altında, bu nedenle suyu sıfırın altına ayarlamak başarısız oluyor.