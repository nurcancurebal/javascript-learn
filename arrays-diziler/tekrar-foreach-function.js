/* Tekrar: forEach
arr.forEach metodu her eleman için bir fonksiyon çalıştırmaya yarar.

Yazımı: */

arr.forEach(function (item, index, array) {
    // ... elemanla bir şeyler yap
});

/* Örneğin aşağıdaki kod dizinin her elemanını göstermeye yarar: */

// her eleman için console.log çağır
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

/*
Bilbo 0 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
Gandalf 1 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
Nazgul 2 [ 'Bilbo', 'Gandalf', 'Nazgul' ] */

// Aşağıdaki kod elemanın dizideki pozisyonu hakkında daha açıklayıcıdır:

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    
    console.log(`${item} ${array}'in ${index}. indeksinde`);
});

/*
Bilbo Bilbo,Gandalf,Nazgul'in 0. indeksinde
Gandalf Bilbo,Gandalf,Nazgul'in 1. indeksinde
Nazgul Bilbo,Gandalf,Nazgul'in 2. indeksinde */

// Eğer fonksiyonun bir sonucu varsa bu görmezden gelinir.