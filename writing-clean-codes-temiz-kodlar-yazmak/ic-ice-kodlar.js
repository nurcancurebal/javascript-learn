/* 
Çok fazla iç içe kod yazmamalısınız.
Bazı durumlarda döngü içinde “continue” kullanmak iyi bir fikir olabilir.
Aşağıdaki kullanım yerine: */

for (let i = 0; i < 10; i++) {
    if (kosul) {
        // ...  <- bir tane daha koşul ( iç içe )
    }
}

// Bu şekilde yazılabilir:

for (let i = 0; i < 10; i++) {
    if (!cond) continue;
    // ...   <- ayrıca bir tane daha iç içe kod yok.
}

// Aynı şekilde bunun benzeri if/else ve return için yapılabilir.
// Örneğin aşağıdaki iki yapı birbiri ile aynı.

function ust(x, n) {
    if (n < 0) {
        alert("Negatif sayılar desteklenmemektedir");
    } else {
        let sonuc = 1;

        for (let i = 0; i < n; i++) {
            sonuc *= x;
        }

        return sonuc;
    }
}


function ustTwo(x, n) {
    if (n < 0) {
        alert("Negatif sayılar desteklenmemektedir");
        return;   // TODO buradaki return çalışma mantığı?
    }

    let sonuc = 1;

    for (let i = 0; i < n; i++) {
        sonuc *= x;
    }

    return sonuc;
}
// … fakat ikincisi daha okunaklıdır, çünkü n<0 koşulu ilk önce kontrol edildi ve buna göre aksiyon alındı sonrasında ana
// kod akışına devam edildi, ayrıca bir else yazmaya gerek kalmadı.