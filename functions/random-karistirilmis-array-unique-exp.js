// TODO Fonksiyonunuzu shuffleArray olarak adlandırın, parametre olarak bir array alır ve karıştırılmış bir array döndürür


let dizi = [2, 4, 6, 8, 10];

shuffleArray(dizi);


function shuffleArray(array) {

    let arrayNumber = [];

    for (let index = 0; index < array.length; index++) {

        let randomNumber = Math.floor((Math.random() * array.length));
        array.toString();
        arrayNumber += array[randomNumber];
    }
    console.log(arrayNumber);
    
};