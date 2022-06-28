// Bir fonksiyon parametresi olarak anahtarları yok etme. Bir dikdörtgen nesne alan ve bir dikdörtgenin çevresini döndüren bir fonksiyon oluşturalım.


// Tahribatsız nesne parametresi
const rect = {
    width: 20,
    height: 10
};

const calculatePerimeter = function (rectangle) {

    return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect));  // 60 (yıkım(destructuring) ile)




const person = {
    firstName: 'Nurcan',
    lastName: 'Cürebal',
    age: 27,
    country: 'Canada',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages: ['Turkish', 'English', 'German']
};

// İmha etmeden kişi nesnesi hakkında bilgi veren bir fonksiyon oluşturalım.

const getPersonInfo = function (obj) {

    const skills = obj.skills;
    const formattedSkills = skills.slice(0,-1).join(', ');
    const languages = 
}
