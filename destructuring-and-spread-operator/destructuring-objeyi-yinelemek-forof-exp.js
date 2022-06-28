const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];



for ({ name, scores, skills, age } of users) {

    console.log(name, scores, skills, age);
};


// Brook 75 [ 'HTM', 'CSS', 'JS' ] 16
// Alex 80 [ 'HTM', 'CSS', 'JS' ] 18
// David 75 [ 'HTM', 'CSS' ] 22
// John 85 [ 'HTML' ] 25
// Sara 95 [ 'HTM', 'CSS', 'JS' ] 26
// Martha 80 [ 'HTM', 'CSS', 'JS' ] 18
// Thomas 90 [ 'HTM', 'CSS', 'JS' ] 20