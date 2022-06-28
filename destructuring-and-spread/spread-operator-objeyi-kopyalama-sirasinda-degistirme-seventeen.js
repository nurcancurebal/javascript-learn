const user = {
    name: 'Nurcan',
    title: 'Programmer',
    country: 'Canada',
    city: 'Ottava'
};

const copiedUser = { ...user, title: "instructor" };

console.log(copiedUser);