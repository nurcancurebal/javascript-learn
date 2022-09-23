// -> Özel "#waterLimit"

/* -> Yeni eklendi
Bu dile yeni eklenen bir özelliktir. JavaScript motoru tarafından henüz desteklenmemektedir. Pollyfill gerekmektedir. */


/* Özel mülkler ve yöntemler için dil düzeyinde destek sağlayan, neredeyse standart olarak tamamlanmış bir JavaScript teklifi var.

Erler ile başlamalı #. Sadece sınıfın içinden erişilebilirler.

Örneğin, burada özel bir #waterLimitmülk ekliyoruz ve su kontrolü mantığını ayrı bir yönteme çıkarıyoruz: */

class CoffeeMachine {

    #waterLimit = 200;

    #checkWater(value) {

        if (value < 0) throw new Error("Negative water");

        if (value > this.#waterLimit) throw new Error("Too much water");
    }

    _waterAmount = 0;

    set waterAmount(value) {

        this.#checkWater(value);

        this._waterAmount = value;
    }

    get waterAmount() {

        return this._waterAmount;
    }
}

let coffeeMachine = new CoffeeMachine();

coffeeMachine.#checkWater(); // Error (dışarıdan erişilemez)
coffeeMachine.#waterLimit = 1000; // Error (dışarıdan erişilemez)

coffeeMachine.waterAmount = 100; // Works

/* Dil düzeyinde, # alanın özel olduğunun özel bir işaretidir. Ona dışarıdan veya miras alınan sınıflardan erişemiyoruz.

Özel alanlar, genel alanlar ile çelişmez. Aynı anda hem özel hem de #waterAmount genel waterAmount alanlara sahip olabiliriz.

waterAmount Örneğin, bir erişimci yapalım #waterAmount: */

class CoffeeMachine2 {

    #waterAmount = 0;

    get waterAmount() {

        return this.#waterAmount;
    }

    set waterAmount(value) {

        if (value < 0) throw new Error("Negative water");

        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine2();

machine.waterAmount = 100;

console.log(machine.#waterAmount); // Error

/* Korunan alanların aksine, özel alanlar dilin kendisi tarafından zorlanır. Bu iyi birşey.

Ancak 'den miras CoffeeMachine2 alırsak, 'ye doğrudan erişimimiz olmaz #waterAmount. waterAmount Alıcı/ayarlayıcıya güvenmemiz gerekecek : */

class MegaCoffeeMachine extends CoffeeMachine2() {

    method() {

        console.log(this.#waterAmount); // Error: yalnızca CoffeeMachine2'den erişebilir
    }
}

/* Birçok senaryoda bu tür sınırlamalar çok şiddetlidir. Bir 'yi genişletirsek CoffeeMachine2, içlerine erişmek için meşru bir nedenimiz olabilir. Bu nedenle, dil sözdizimi tarafından desteklenmese de korumalı alanlar çoğu zaman kullanılır. */


/* -> Önemli:
Özel alanlar özeldir.

Unutmayın, genellikle alanlara şu [ad] ile erişebiliriz: */

class User {
    // ...
    sayHi() {

        let fieldName = "name";

        console.log(`Hello, ${this[fieldName]}`);
    }
}

// İmkansız olan özel alanlarla: this['#name']çalışmıyor. Bu, gizliliği sağlamak için bir sözdizimi sınırlamasıdır.