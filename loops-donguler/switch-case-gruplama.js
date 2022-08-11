/*
“case”'leri gruplama
Gövdesinde aynı kodu çalıştıran birden fazla case gruplanabilir.
Örneğin, diyelim ki case 3 ve case 5 için aynı kodu çalıştırmak istedik: */

let a = 2 + 2;

switch (a) {
    case 4:
        console.log('Doğru!');
        break;

    case 3:                    // (*) iki "case" gruplandı
    case 5:
        console.log('Yanlış!');
        console.log("Neden matematik dersi almıyorsun?");
        break;

    default:
        console.log('Sonuç garip. Gerçekten!');
};

/* 3 ve 5 aynı mesajı gösterecek.
Aslında “gruplama” switch/case'in break olmadan çalıştırılmış halidir. Yan etki de denebilir. case 3 (*)'dan başlar ve
arada break olmadığından case 5 ile devam eder. */