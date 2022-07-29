// Getirme API'si, kaynakları (ağ genelindekiler dahil) almak için bir arabirim sağlar. XMLHttpRequest kullanan herkese
// tanıdık gelecektir, ancak yeni API daha güçlü ve esnek bir özellik seti sağlar. Bu görevde, url ve APIS istemek için
// getirmeyi kullanacağız. Buna ek olarak, getirme API'sini kullanarak ağ kaynaklarına erişimde vaatlerin kullanım durumunu
// gösterelim.

const url = 'https://restcountries.com/v2/all'; // ülkeler API'si

fetch(url)
    .then(response => response.json()) // API verilerine JSON olarak erişme
    .then(data => {

        // verileri almak
        console.log(data);

    })
    .catch(error => console.error(error)); // yanlış bir şey olursa hata işleme