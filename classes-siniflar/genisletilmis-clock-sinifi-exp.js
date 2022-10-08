/* -> Genişletilmiş clock sınıfı

Clock sınıfımız şu anda saniyede bir zamanı ekrana basmaktadır.

ExtendedClock adında Clock'tan türeyen yeni bir sınıf yazın ve buna precision – her saniye atışında kaç ms geçtiğini ekrana bassın. Normalde bu 1000 ms ( 1 sn ) olmalıdır.

Kodlarınız extended-clock.js içerisinde olmalıdır.
Orjinal clock.js üzerinde bir değişiklik yapmayın. Bundan türetin. */

class Clock {

    constructor(options) { // options = {precision: 1500, timer: 5} (alttan aldı)

        this.timer = options.timer || 0; // timer= 5
        this.options = options;
    }

    render() {

        this.timer++; // timer= 5 (ile başlar)
        console.log("TIMER:", this.timer); //* ekrana ilk TIMER: 7 yazdı
    }
}

class ExtendedClock extends Clock {

    constructor(options = {}) { // options = {precision: 1500, timer: 5}

        super(options);

        let { precision = 1000 } = options;

        this.precision = precision; // precision= 1500
    }

    start() {

        this.render();

        setInterval(() => this.render(), this.precision); // precision= 1500

    }
};

new ExtendedClock({ precision: 1500, timer: 5 }).start();