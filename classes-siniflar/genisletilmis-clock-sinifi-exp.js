/* -> Genişletilmiş clock sınıfı

Clock sınıfımız şu anda saniyede bir zamanı ekrana basmaktadır.

ExtendedClock adında Clock'tan türeyen yeni bir sınıf yazın ve buna precision – her saniye atışında kaç ms geçtiğini ekrana bassın. Normalde bu 1000 ms ( 1 sn ) olmalıdır.

Kodlarınız extended-clock.js içerisinde olmalıdır.
Orjinal clock.js üzerinde bir değişiklik yapmayın. Bundan türetin. */

class Clock {

    setTimeout(() => {

    }, 1000)
}


class ExtendedClock extends Clock {

    constructor(options) {

        super(options);

        let { precision = 1000 } = options;

        this.precision = precision;
    }

    start() {

        this.render();

        this.timer = setInterval(() => this.render(), this.precision);
    }
};

// TODO clock yok