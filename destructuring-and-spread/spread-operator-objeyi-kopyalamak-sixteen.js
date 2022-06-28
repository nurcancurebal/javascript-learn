const user = {
    name: 'Nurcan',
    title: 'Programmer',
    country: 'Canada',
    city: 'Ottava'
};

const copiedUser = { ...user };

console.log(copiedUser);

// {
//     name: 'Nurcan',
//     title: 'Programmer',
//     country: 'Canada',
//     city: 'Ottava'
//   }