//! koşulu sağlayan İLK değerin indexini döndürür

const users = [
    {
        id: 1,
        name: 'Nurcan',
        age: 27,
    },
    {
        id: 2,
        name: 'Erdinç',
        age: 27
    },
    {
        id: 3,
        name: 'Bal',
        age: 1
    }];


    const findIndexName = users.findIndex(function (names) {
        
        return names.name == 'Bal';
    });

    console.log(findIndexName);