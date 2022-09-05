// merdiven objesi yukarı aşağı harekete izin vermektedir:

let merdiven = {

    adim: 0,

    yukari() {

        this.adim++;
    },

    asagi() {

        this.adim--;
    },

    adimiGoster: function () { // o anki adımı gösterir

        console.log(this.adim);
    }
};

// Eğer aşağıdaki gibi ard arda çağrı yapılırsa:

merdiven.yukari();
merdiven.yukari();
merdiven.asagi();
merdiven.adimiGoster(); // 1

// yukari ve asagi metodlarını aşağıdaki gibi zincirleme yapılabilir hale getiriniz:

merdiven.yukari().yukari().asagi().adimiGoster(); // TypeError: Cannot read property 'yukari' of undefined
// (zincirlemeyi algılamadı)

// Bu yaklaşım çoğu JavaScript kütüphanesinde yaygın olarak kullanılmaktadır.

// Çözüm her metod çağrısı sonrası kendisini döndermektir.

let merdiven2 = {

    adim: 0,

    yukari() {

        this.adim++;
        return this;
    },

    asagi() {

        this.adim--;
        return this;
    },

    adimiGoster() {

        console.log(this.adim);
        return this;
    }
}

merdiven2.yukari().yukari().asagi().yukari().asagi().adimiGoster(); //1

// Ayrıca her satır için tek çağrı da yazılabilir. Uzun zincirleme fonksiyonlar için bu daha okunabilirdir.

merdiven2
    .yukari()
    .yukari()
    .asagi()
    .yukari()
    .asagi()
    .adimiGoster(); // 2

let merdiven3 = {

    adim: 0,

    yukari: function () {

        this.adim++;
        return this;
    },

    asagi: function () {

        this.adim--;
        return this;
    },

    adimiGoster: function () {

        console.log(this.adim);
    }
};

merdiven3
    .yukari()
    .yukari()
    .asagi()
    .yukari()
    .asagi()
    .adimiGoster(); // 1