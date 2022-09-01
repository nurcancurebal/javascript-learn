// Object.seal() yöntemi, bir nesneyi mühürler, ona yeni özelliklerin eklenmesini önler ve mevcut tüm özellikleri yapılandırılamaz
// olarak işaretler. Mevcut özelliklerin değerleri, yazılabilir oldukları sürece değiştirilebilir.

const person = {
    firstName: 'Nurcan',
    age: 27,
    country: 'Canada',
    city: 'Ottava',
    skills: ['HTML', 'CSS', 'JS']
};

Object.seal(person);

person.nationality = 'Ethiopian'; // eklemedi
person.country = 'Ireland'; // değiştirdi
person.title = 'teacher'; // eklemedi

person.skills.push('Meteor'); // var olana ekledi
person.skills.push('SasS'); // var olana ekledi

person.isMarried = true; // eklemedi


console.log(person); // {firstName: 'Nurcan', age: 27, country: 'Ireland', city: 'Ottava', skills: Array(5)}