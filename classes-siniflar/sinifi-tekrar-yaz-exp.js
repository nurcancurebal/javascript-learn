/* -> Sınıfı tekrar yaz

Clock sınıfını prototipten normal “class” yazımına çeviriniz

Not: Konsolu açıp saatin değiştiğini görebilirsiniz. */

class Clock {

    constructor({ template }) {

        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();

        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();

        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();

        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours) // str.replace(substr, newSubstr);, yeni bir alt dize ile değiştirilen yeni bir dize döndürür, orijinal dizeyi değiştirmez.
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {

        clearInterval(this.timer);
    }

    start() {

        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let clock = new Clock({ template: 'h:m:s' });

clock.start();

// 18:36:35
// 18:36:36
// 18:36:37
// 18:36:38
// 18:36:39
// 18:36:40 ...