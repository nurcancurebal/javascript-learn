// TODO Fonksiyonunuzu shuffleArray olarak adlandırın, parametre olarak bir array alır ve karıştırılmış bir array döndürür


let dizi = [12, 2, 4, 4,8, 6, 8, 10];

const result = shuffleArray(dizi);

console.log(result);


function shuffleArray(array) {


    array.sort(() => Math.random() - 0.5) // arrayleri karıştırmak için kısa bir yoldur

    return array

};