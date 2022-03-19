const database = {
    users: [
        { id: 1, username: "erdinccurebal", age: 15 },
        { id: 2, username: "nurcancurebal", age: 12 },
        { id: 3, username: "balcurebal", age: 1 },
    ],
    products: [
        { id: 1, name: "Keyboard", category: "ELEC" },
        { id: 2, name: "Mouse", category: "ELEC" },
        { id: 3, name: "Ball", category: "HOME" },
        { id: 4, name: "Monitor", category: "ELEC" },
        { id: 5, name: "Tv", category: "HOME" },
    ]
};

console.log("DATABASE'nin kullanıcı ilk hali.", database.users);

database.users.push({ id: 4, username: "gofletcurebal", age: 0 })

console.log("DATABASE'nin kullanıcı son hali.", database.users);
console.log()