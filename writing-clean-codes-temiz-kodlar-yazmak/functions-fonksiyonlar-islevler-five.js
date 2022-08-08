// Şimdiye kadar çok tanıdık fonksiyon bildirimi, ifade fonksiyonu, ok fonksiyonu ve anonim fonksiyona sahipsiniz. Bu
// zorlukta, diğer işlevler yerine ok işlevini kullanma eğilimindeyiz. Ok işlevi, diğer işlevlerin yerine geçmez. Ayrıca ok
// işlevleri ve işlev bildirimleri tam olarak aynı değildir. Bu yüzden ne zaman kullanıp ne zaman kullanmayacağınızı
// bilmelisiniz. Farkı diğer bölümlerde ayrıntılı olarak ele alacağım. İşlev tek bir satırsa, örtük dönüş yerine açık
// dönüşü kullanacağız.


// bir kişinin tam adını döndüren fonksiyon

const printFullName = (firstName, lastName) => firstName + ' ' + lastName;


// Sayının karesini hesaplayan fonksiyon

const square = (n) => n * n;

// rastgele altıgen renkler üreten bir fonksiyon

const hexaColor = () => {

    const str = '0123456789abcdef';
    let hexa = '#';
    let index;

    for (let i = 0; i < 6; i++) {

        index = Math.floor(Math.random() * str.length);

        hexa += str[index];
    };

    return hexa;
};


// tarih ve saati gösteren bir fonksiyon

const showDateTime = () => {

    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 10) {

        hours = '0' + hours;
    }

    if (minutes < 10) {

        minutes = '0' + minutes;
    }

    const dateMonthYear = date + '.' + month + '.' + year;

    const time = hours + ':' + minutes;

    const fullTime = dateMonthYear + ' ' + time;

    return fullTime;
};

// new Dat().toLocaleString() aynı zamanda geçerli tarih saatini görüntülemek için kullanılabilir. toLocaleString()
// yöntemi farklı bağımsız değişkenler alır.