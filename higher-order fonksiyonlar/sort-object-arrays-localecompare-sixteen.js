let users = [
    {
        id: 2,
        name: 'Nurcan',
        age: 27,
        gender: 2
    },
    {
        id: 4,
        name: 'Erdinç',
        age: 27,
        gender: 1
    },
    {
        id: 1,
        name: 'Bal',
        age: 1,
        gender: 2
    },
    {
        id: 3,
        name: 'Kanada',
        age: 30,
        gender: 1
    }];

const usersSort = users.sort(function (a, b) {

    return a.name.localeCompare(b.name);
});

console.log(usersSort);

const usersSortTwo = users.sort(function (a, b) {

    return b.name.localeCompare(a.name);
});

console.log(usersSort);